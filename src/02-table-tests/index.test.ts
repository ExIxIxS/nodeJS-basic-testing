import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 1, action: Action.Subtract, expected: 9 },
  { a: 1.2, b: 1, action: Action.Subtract, expected: 1.2 - 1 },
  { a: 10, b: 20, action: Action.Subtract, expected: -10 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 3, b: 0, action: Action.Multiply, expected: 0 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 9, b: 1, action: Action.Divide, expected: 9 },
  { a: 0, b: 10, action: Action.Divide, expected: 0 },
  { a: 10, b: 0, action: Action.Divide, expected: Infinity },
  { a: 10, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 10, b: 1, action: Action.Exponentiate, expected: 10 },
  { a: 10, b: 2, action: Action.Exponentiate, expected: 100 },
  { a: 100, b: 0.5, action: Action.Exponentiate, expected: 10 },
  { a: '3', b: 2, action: Action.Add, expected: null },
  { a: 3, b: '2', action: Action.Add, expected: null },
  { a: 3, b: '2', action: 'invalid', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('test case № %#', (testObj) => {
    expect(simpleCalculator({ ...testObj })).toEqual(testObj.expected);
  });
});
