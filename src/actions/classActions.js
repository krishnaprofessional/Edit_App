import * as types from '../constants/actionTypes';


export function  addItem(bgColor, height, width, radius) {
  return {
    type: types.ADD_ITEM,
    bgColor, height, width, radius
  };
}
export function  removeItem(index) {
  return {
    type: types.REMOVE_ITEM,
    index
  };
}
