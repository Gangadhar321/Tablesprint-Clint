import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Register from './Components/Usercomponent/Register';
import Login from './Components/Usercomponent/Login';
import Logout from './Components/Usercomponent/Logout';
import ForgotPassword from './Components/Usercomponent/ForgotPassword';
import CategoryForm from './Components/Category/CategoryForm';
import CategoryList from './Components/Category/CategoryList';
import CategoryEditForm from './Components/Category/CategoryEditForm';

import SubcategoryForm from './Components/Subcategory/SubcategoryForm';
import HomePage from './HomeComponent/Homepage';
import CategoryDashboard from './Components/Category/CategoryDashboard/CategoryDashboard';

import SubcategoryItem from './Components/Subcategory/SubcategoryItem';
import SubcategoryList from './Components/Subcategory/SubcategoryList';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path='/' element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/homepage' element={<HomePage/>} />
          <Route path="logout" element={<Logout />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="allcategories" element={<CategoryList />} />
          <Route path="addcategories" element={<CategoryForm />} />
          <Route path='addsubcategories' element={<SubcategoryForm/>} />
          <Route path='/categorydashboard' element={<CategoryDashboard/>} />
          <Route path='allsubcategories' element={<SubcategoryList/>} />
          <Route path='category' element={<SubcategoryItem/>} />
          <Route path='categoryEdit' element={<CategoryEditForm/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

