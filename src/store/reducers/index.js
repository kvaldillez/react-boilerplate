import * as ActionTypes from '../actions';

const initialState = {
  test: true
};

function test(state) {
  return {
    ...state,
    test: false
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TEST:
      return test(state, action);
    default:
      return state;
  }
};

export default reducer;
