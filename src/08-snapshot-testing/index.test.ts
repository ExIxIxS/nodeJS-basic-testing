import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const values = [1, 2, 3, 4, 5];
  const expectedLinkedList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: { value: 5, next: { value: null, next: null } },
        },
      },
    },
  };

  test('should generate linked list from values 1', () => {
    const result = generateLinkedList(values);

    expect(result).toStrictEqual(expectedLinkedList);
  });

  test('should generate linked list from values 2', () => {
    const result = generateLinkedList(values);

    expect(result).toMatchSnapshot();
  });
});
