import {SET_PAGE_TITLE} from "../actions/types";

const initialState = {
  page: "Get it while it's hot",
  link: ""
}

function page(state=initialState, action) {
  switch (action.type) {
    case SET_PAGE_TITLE:
      {
        // debugger;
        let newTitle = (action.payload !==undefined) ? {...state,...action.payload} : state;
        if(newTitle.link === '') {
          newTitle.page=initialState.page;
        }
        return newTitle;
      }
      default:{
        return state;
      }
  }
}

export default page;