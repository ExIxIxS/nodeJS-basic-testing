import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');
  const spyMockOne = jest.spyOn(originalModule, 'mockOne');
  const spyMockTwo = jest.spyOn(originalModule, 'mockTwo');
  const spyMockThree = jest.spyOn(originalModule, 'mockThree');

  return {
    ...originalModule,
    mockOne: spyMockOne,
    mockTwo: spyMockTwo,
    mockThree: spyMockThree,
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne();
    mockTwo();
    mockThree();

    expect(mockOne).toHaveBeenCalled();
    expect(mockTwo).toHaveBeenCalled();
    expect(mockThree).toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    unmockedFunction();
  });
});
