import {SET_PAGE_TITLE} from './types';

export const setTitle = (title,link) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE_TITLE,
      payload: {page:title,link:link}
    })
  }
}