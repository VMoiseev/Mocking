import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Проверка функции если статус нормальный', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 5,
  });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});

test('Проверка функции если статус ошибочен', () => {
  fetchData.mockReturnValue({
    status: 'error',
    level: 5,
  });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
