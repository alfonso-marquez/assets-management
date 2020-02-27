import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.mainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate,
  );

const makeSelectResponse = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.response,
  );

export default makeSelectMainPage;
export { selectMainPageDomain, makeSelectResponse };
