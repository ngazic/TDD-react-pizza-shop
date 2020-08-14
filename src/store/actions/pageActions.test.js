import * as constants from './types';
import * as actions from './pageActions';
import setupMockStore from "redux-mock-store";
import thunk from 'redux-thunk';

describe('page actions',()=> {
  const mockStore = setupMockStore([thunk]);
  const store = mockStore();
  const actionPayload = {
    page: 'this is title mock',
    link: 'http://page-url-mock.com'
  }

  beforeEach(()=>{
    store.clearActions();
  })

  it('should create an action for setting page title', () => {
    const expectedAction = [
      {
        type: constants.SET_PAGE_TITLE,
        payload: actionPayload
      }
    ]
    store.dispatch(actions.setTitle(actionPayload.page, actionPayload.link));
    expect(store.getActions()).toEqual(expectedAction);
  });
})