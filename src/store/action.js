export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  TEST: 'TEST'
};

// функции для изменения стейта
export const changeGenre = (name) => ({
  type: ActionType.CHANGE_GENRE,
  payload: name,
});

export const changeTest = (test) => ({
  type: ActionType.TEST,
  payload: test
});

