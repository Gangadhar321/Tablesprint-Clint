
// // src/redux/actions/userActions.js
// import api from "../../Axios/Axiosconfig";

// export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
// export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
// export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
// export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
// export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
// export const USER_LOGOUT = 'USER_LOGOUT';


// export const registerUser = (userData, navigate) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_REGISTER_REQUEST });
//     const { data } = await api.post('/api/register', userData);
//     dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
//     navigate('/api/login'); // Redirect to login page after registration
//   } catch (error) {
//     dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data.error });
//   }
// };

// export const loginUser = (userData, navigate) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST });
//     const { data } = await api.post('/api/login', userData);
//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
//     navigate('/'); // Redirect to home page after login
//   } catch (error) {
//     dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.error });
//   }
// };




// //Logout action
// export const logout = () => (dispatch) => {
//     dispatch({ type: USER_LOGOUT });
//     localStorage.removeItem('userInfo'); // Clear user data from local storage
//   };
  

// export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
// export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
// export const USER_LOGOUT = 'USER_LOGOUT';

// export const loginUser = (userData, navigate) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST });
//     const { data } = await api.post('/login', userData);
//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
//     localStorage.setItem('userInfo', JSON.stringify(data)); // Save user data in local storage
//     navigate('/'); // Redirect to home page after login
//   } catch (error) {
//     dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.error });
//   }
// };

// // Logout action
// export const logout = () => (dispatch) => {
//     dispatch({ type: USER_LOGOUT });
//     localStorage.removeItem('userInfo'); // Clear user data from local storage
// };