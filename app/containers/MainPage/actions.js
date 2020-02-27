/*
 *
 * MainPage actions
 *
 */

import { DEFAULT_ACTION, FETCH_CATEGORIES, LOAD_CATEGORIES } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchCategories() {
  return {
    type: FETCH_CATEGORIES,
  };
}
export function categoriesLoaded(response) {
  console.log('LOAD_CATEGORIES ran');
  console.log(response);
  return {
    type: LOAD_CATEGORIES,
    response,
  };
}
