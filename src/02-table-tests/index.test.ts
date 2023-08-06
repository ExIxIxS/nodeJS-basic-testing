import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 10, b: 1, action: Action.Subtract, expected: 9 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: '2', action: 'invalid', expected: null },
  { a: '3', b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('test case № %#', (testObj) => {
    expect(simpleCalculator({ ...testObj })).toEqual(testObj.expected);
  });
});
