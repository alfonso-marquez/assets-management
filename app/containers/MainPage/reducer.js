/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOAD_CATEGORIES } from './constants';

export const initialState = {
  response: {},
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CATEGORIES:
        console.log('FETCH_CATAEGORIES ran');
        draft.response = action.response;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default mainPageReducer;
