import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 1000;
  const validCashAmount = initialBalance;
  const invalidCashAmount = 2000;

  const bankAccount = getBankAccount(initialBalance);
  const transferBankAcount = getBankAccount(0);

  test('should create account with initial balance', () => {
    expect(bankAccount.getBalance()).toEqual(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => bankAccount.withdraw(invalidCashAmount)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      bankAccount.transfer(invalidCashAmount, transferBankAcount),
    ).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    expect(() =>
      bankAccount.transfer(validCashAmount, bankAccount),
    ).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    bankAccount.deposit(validCashAmount);

    expect(bankAccount.getBalance()).toEqual(validCashAmount * 2);
  });

  test('should withdraw money', () => {
    bankAccount.withdraw(validCashAmount);

    expect(bankAccount.getBalance()).toEqual(initialBalance);
  });

  test('should transfer money', () => {
    bankAccount.transfer(validCashAmount, transferBankAcount);

    expect(transferBankAcount.getBalance()).toEqual(validCashAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await bankAccount.fetchBalance();
    if (balance !== null) {
      expect(typeof balance).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const testBalanceValue = 55;
    jest
      .spyOn(bankAccount, 'fetchBalance')
      .mockResolvedValueOnce(testBalanceValue);

    await bankAccount.synchronizeBalance();

    expect(bankAccount.getBalance()).toEqual(testBalanceValue);

    jest.restoreAllMocks();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValueOnce(null);

    await expect(bankAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );

    jest.restoreAllMocks();
  });
});
