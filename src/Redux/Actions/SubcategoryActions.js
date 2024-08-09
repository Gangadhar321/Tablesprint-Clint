// // src/Redux/Actions/SubcategoryActions.js
// import axios from "axios";
// export const FETCH_SUBCATEGORIES_SUCCESS = 'FETCH_SUBCATEGORIES_SUCCESS';
// export const ADD_SUBCATEGORY_SUCCESS = 'ADD_SUBCATEGORY_SUCCESS';
// export const UPDATE_SUBCATEGORY_SUCCESS = 'UPDATE_SUBCATEGORY_SUCCESS';
// export const DELETE_SUBCATEGORY_SUCCESS = 'DELETE_SUBCATEGORY_SUCCESS';

// // Action creators
// export const fetchSubcategoriesSuccess = (subcategories) => ({
//   type: FETCH_SUBCATEGORIES_SUCCESS,
//   payload: subcategories,
// });

// export const addSubcategorySuccess = (subcategory) => ({
//   type: ADD_SUBCATEGORY_SUCCESS,
//   payload: subcategory,
// });

// export const updateSubcategorySuccess = (subcategory) => ({
//   type: UPDATE_SUBCATEGORY_SUCCESS,
//   payload: subcategory,
// });

// export const deleteSubcategorySuccess = (subcategoryId) => ({
//   type: DELETE_SUBCATEGORY_SUCCESS,
//   payload: subcategoryId,
// });

// // Async action creators for API calls
// export const addSubcategory = (subcategoryData) => {
//   return async (dispatch) => {
//     try {
//       // API call to add a new subcategory
//       const response = await axios.post('/api/addsubcategories', subcategoryData);
//       dispatch(addSubcategorySuccess(response.data));
//     } catch (error) {
//       console.error('Error adding subcategory:', error);
//     }
//   };
// };

// export const updateSubcategory = (subcategoryId, subcategoryData) => {
//   return async (dispatch) => {
//     try {
//       // API call to update an existing subcategory
//       const response = await axios.put(`/api/subcategories/${subcategoryId}`, subcategoryData);
//       dispatch(updateSubcategorySuccess(response.data));
//     } catch (error) {
//       console.error('Error updating subcategory:', error);
//     }
//   };
// };
// src/Redux/Actions/SubcategoryActions.js
import axios from 'axios';

export const ADD_SUBCATEGORY_SUCCESS = 'ADD_SUBCATEGORY_SUCCESS';
export const DELETE_SUBCATEGORY_SUCCESS = 'DELETE_SUBCATEGORY_SUCCESS';
export const FETCH_SUBCATEGORIES_SUCCESS = 'FETCH_SUBCATEGORIES_SUCCESS';
export const UPDATE_SUBCATEGORY_SUCCESS = 'UPDATE_SUBCATEGORY_SUCCESS';

const API_URL = 'http://localhost:5000/api/subcategories';

// Add subcategory
export const addSubcategory = (subcategory) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, subcategory);
    dispatch({ type: ADD_SUBCATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Failed to add subcategory', error);
  }
};

// Fetch subcategories
export const fetchSubcategories = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_SUBCATEGORIES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Failed to fetch subcategories', error);
  }
};

// Delete subcategory
export const deleteSubcategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_SUBCATEGORY_SUCCESS, payload: id });
  } catch (error) {
    console.error('Failed to delete subcategory', error);
  }
};

// Update subcategory
export const updateSubcategory = (id, subcategory) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, subcategory);
    dispatch({ type: UPDATE_SUBCATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Failed to update subcategory', error);
  }
};
