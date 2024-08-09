// // src/redux/actions/categoryActions.js
// import api from "../../Axios/Axiosconfig";

// export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
// export const ADD_CATEGORY = 'ADD_CATEGORY';
// export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// export const fetchCategories = () => async (dispatch) => {
//   try {
//     const { data } = await api.get('/api/allcategories');
//     dispatch({ type: FETCH_CATEGORIES, payload: data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const addCategory = (category) => async (dispatch) => {
//   try {
//     const { data } = await api.post('/api/addcategories', category);
//     dispatch({ type: ADD_CATEGORY, payload: data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const deleteCategory = (categoryId) => async (dispatch) => {
//   try {
//     await api.delete(`/api/categories/${categoryId}`);
//     dispatch({ type: DELETE_CATEGORY, payload: categoryId });
//   } catch (error) {
//     console.error(error);
//   }
// };


// src/redux/actions/categoryActions.js
// import api from "../../Axios/Axiosconfig";

// export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
// export const ADD_CATEGORY = 'ADD_CATEGORY';
// export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
// export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// export const fetchCategories = () => async (dispatch) => {
//   try {
//     const { data } = await api.get('/api/allcategories');
//     dispatch({ type: FETCH_CATEGORIES, payload: data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const addCategory = (category) => async (dispatch) => {
//   try {
//     const { data } = await api.post('/api/addcategories', category);
//     dispatch({ type: ADD_CATEGORY, payload: data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const updateCategory = (categoryId, category) => async (dispatch) => {
//   try {
//     const { data } = await api.put(`/api/categories/${categoryId}`, category);
//     dispatch({ type: UPDATE_CATEGORY, payload: data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const deleteCategory = (categoryId) => async (dispatch) => {
//   try {
//     await api.delete(`/api/categories/${categoryId}`);
//     dispatch({ type: DELETE_CATEGORY, payload: categoryId });
//   } catch (error) {
//     console.error(error);
//   }
// };


// src/redux/actions/categoryActions.js
import api from "../../Axios/Axiosconfig";

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await api.get('/api/allcategories');
    dispatch({ type: FETCH_CATEGORIES, payload: data });
  } catch (error) {
    console.error('Error fetching categories:', error.response ? error.response.data : error.message);
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    console.log('Adding category:', category); // Debug statement
    const { data } = await api.post('/api/addcategories', category);
    dispatch({ type: ADD_CATEGORY, payload: data });
  } catch (error) {
    console.error('Error adding category:', error.response ? error.response.data : error.message);
  }
};

export const updateCategory = (categoryId, category) => async (dispatch) => {
  try {
    console.log('Updating category:', categoryId, category); // Debug statement
    const { data } = await api.put(`/api/categories/${categoryId}`, category);
    dispatch({ type: UPDATE_CATEGORY, payload: data });
  } catch (error) {
    console.error('Error updating category:', error.response ? error.response.data : error.message);
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    await api.delete(`/api/categories/${categoryId}`);
    dispatch({ type: DELETE_CATEGORY, payload: categoryId });
  } catch (error) {
    console.error('Error deleting category:', error.response ? error.response.data : error.message);
  }
};

