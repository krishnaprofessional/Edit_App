import {ADD_ITEM, REMOVE_ITEM} from '../constants/actionTypes';
import initialState from './initialState';


export default function EditorReducer(state = initialState.boxes, action) {

  switch (action.type) {
    case ADD_ITEM :
    {
      const {bgColor, height, width, radius} = action;
      return [...state, {bgColor, height, width, radius}];
    }

    case REMOVE_ITEM:
    {
      const list = [...state];
      list.splice(action.index,1);
      return list;
    }
    default:
      return state;
  }
}
