// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css'; // Optional: for styling the homepage

// const HomePage = () => {
//   return (
//     <div className="homepage-container">
//       <aside className="sidebar">
//         <nav>
//           <ul>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><Link to="/categorydashboard">Category Dashboard</Link></li>
//             <li><Link to="/allcategories">Category</Link></li>
//             <li><Link to="/addsubcategories">Subcategory</Link></li>
//             <li><Link to="/products">Product</Link></li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="content">
//         <h2>Welcome to the Table Sprint</h2>
//         {/* You can add more content here */}
//       </main>
//     </div>
//   );
// };

// export default HomePage;


// // src/components/HomePage/HomePage.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './HomePage.css'; // Optional: for styling the homepage

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <div className="homepage-container">
//       <header className="top-bar">
//         <div className="top-bar-content">
//           <h1>My Application</h1>
//           <button className="logout-button" onClick={handleLogout}>
//             <i className="fas fa-user"></i> Logout
//           </button>
//         </div>
//       </header>
//       <aside className="sidebar">
//         <nav>
//           <ul>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><Link to="/categorydashboard">Category Dashboard</Link></li>
//             <li><Link to="/allcategories">Category</Link></li>
//             <li><Link to="/addsubcategories">Subcategory</Link></li>
//             <li><Link to="/products">Product</Link></li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="content">
//         <h2>Welcome to the Table Sprint</h2>
//         {/* You can add more content here */}
//       </main>
//     </div>
//   );
// };

// export default HomePage;
// src/components/HomePage/HomePage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'; // Optional: for styling the homepage

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="homepage-container">
      <header className="top-bar">
        <div className="top-bar-content">
          <h1>My Application</h1>
          <button className="logout-button" onClick={handleLogout}> 
            <i className="fas fa-user"></i> Logout
          </button>
        </div>
      </header>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/categorydashboard">Category Dashboard</Link></li>
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
