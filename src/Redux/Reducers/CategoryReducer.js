// src/redux/reducers/categoryReducer.js
import { FETCH_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY } from '../Actions/CategoryActions';

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter(category => category._id !== action.payload);
    default:
      return state;
  }
};

export default categoryReducer;
