import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: for styling the homepage

const HomePage = () => {
  return (
    <div className="homepage-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/allcategories">Category</Link></li>
            <li><Link to="/addsubcategories">Subcategory</Link></li>
            <li><Link to="/products">Product</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <h2>Welcome to the Table Sprint</h2>
        {/* You can add more content here */}
      </main>
    </div>
  );
};

export default HomePage;
