
import { combineReducers } from 'redux';
import categoryReducer from './CategoryReducer';
 import subcategoryReducer from './SubcategoryReducer';
import productReducer from './ProductReducer'
import userReducer from './UserReducer';


const rootReducer = combineReducers({
  categories: categoryReducer,
   subcategories: subcategoryReducer,
  products: productReducer,
  users: userReducer,
});

export default rootReducer;
