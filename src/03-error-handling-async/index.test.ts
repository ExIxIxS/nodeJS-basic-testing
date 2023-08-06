import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const testValue = 'Test string';

    await expect(resolveValue(testValue)).resolves.toEqual(testValue);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const testValue = 'Test message';

    expect(() => throwError(testValue)).toThrowError(testValue);
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultMessage = 'Oops!';

    expect(() => throwError()).toThrowError(defaultMessage);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
