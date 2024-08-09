import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Optional: for styling the homepage

const CategoryDashboard = () => {
  return (
    <div className="homepage-container">
      
        <nav>
          <ul>
            <li><Link to="/dashboard/api/categories/:categoryId',">CategoryItem</Link></li>
            <li><Link to="/allcategories">Category</Link></li>
            <li><Link to="/addsubcategories">Subcategory</Link></li>
           
          </ul>
        </nav>
      
      <main className="content">
        <h2>Welcome to the Table Sprint</h2>
        {/* You can add more content here */}
      </main>
    </div>
  );
};

export default CategoryDashboard;
