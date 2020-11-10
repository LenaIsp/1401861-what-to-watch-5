const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  TEST: 'TEST'
};

const ActionCreator = {
  changeGenre: (name) => ({
    type: ActionType.CHANGE_GENRE,
    payload: name,
  }),

  changeTest: (test) => ({
    type: ActionType.TEST,
    payload: test
  })
};

export {ActionType, ActionCreator};

