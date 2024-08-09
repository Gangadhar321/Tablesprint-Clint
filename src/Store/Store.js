
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk correctly
import rootReducer from '../Redux/Reducers/Rootreducer'; // Ensure this path is correct

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware) // Apply middleware
);

export default store;
