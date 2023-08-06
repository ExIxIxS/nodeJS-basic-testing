import axios from 'axios';
import { THROTTLE_TIME, throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const domenPath = '/posts';

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const createSpy = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi(domenPath);

    expect(createSpy).toHaveBeenCalledWith({
      baseURL: baseUrl,
    });
  });

  test('should perform request to correct provided url', async () => {
    jest.mock('axios');

    const axiosInstance = {
      get: jest.fn().mockResolvedValueOnce({ data: 'test data' }),
    };
    const createMock = jest.fn().mockReturnValueOnce(axiosInstance);
    axios.create = createMock;

    await throttledGetDataFromApi(domenPath);
    jest.advanceTimersByTime(THROTTLE_TIME);

    expect(axiosInstance.get).toHaveBeenCalled();
    expect(axiosInstance.get).toHaveBeenCalledWith(domenPath);
  });

  test('should return response data', async () => {
    jest.mock('axios');

    const responseData = { data: 'test data' };
    const axiosInstance = {
      get: jest.fn().mockResolvedValueOnce(responseData),
    };
    const createMock = jest.fn().mockReturnValueOnce(axiosInstance);
    axios.create = createMock;

    const result = await throttledGetDataFromApi(domenPath);
    jest.advanceTimersByTime(THROTTLE_TIME);

    expect(result).toEqual(responseData.data);
  });
});
