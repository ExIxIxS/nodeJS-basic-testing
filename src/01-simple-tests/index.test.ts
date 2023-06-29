import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const addTestObj = {
      a: 1,
      b: 2,
      action: Action.Add,
    };

    const expectedResult = 3;

    expect(simpleCalculator(addTestObj)).toEqual(expectedResult);
  });

  test('should subtract two numbers', () => {
    const addTestObj = {
      a: 10,
      b: 1,
      action: Action.Subtract,
    };

    const expectedResult = 9;

    expect(simpleCalculator(addTestObj)).toEqual(expectedResult);
  });

  test('should multiply two numbers', () => {
    const addTestObj = {
      a: 2,
      b: 3,
      action: Action.Multiply,
    };

    const expectedResult = 6;

    expect(simpleCalculator(addTestObj)).toEqual(expectedResult);
  });

  test('should divide two numbers', () => {
    const addTestObj = {
      a: 9,
      b: 3,
      action: Action.Divide,
    };

    const expectedResult = 3;

    expect(simpleCalculator(addTestObj)).toEqual(expectedResult);
  });

  test('should exponentiate two numbers', () => {
    const addTestObj = {
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    };

    const expectedResult = 8;

    expect(simpleCalculator(addTestObj)).toEqual(expectedResult);
  });

  test('should return null for invalid action', () => {
    const addTestObj = {
      a: 2,
      b: 3,
      action: 'invalid',
    };

    expect(simpleCalculator(addTestObj)).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const addTestObj = {
      a: '2',
      b: 3,
      action: Action.Add,
    };

    expect(simpleCalculator(addTestObj)).toBeNull();
  });
});
