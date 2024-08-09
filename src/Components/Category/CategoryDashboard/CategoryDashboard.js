import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Optional: for styling the homepage

const CategoryDashboard = () => {
  return (
    <div className="homepage-container">
      
        <nav>
          <ul>
            <li><Link to="/categoryitem',">CategoryItem</Link></li>
            <li><Link to="/allcategories">CategoryList</Link></li>
            <li><Link to="/addcategories">CategoryForm</Link></li>
           
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
