
// src/components/User/Logout.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../Redux/Actions/UserActions';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <button onClick={handleLogout}>
//       Logout
//     </button>
//   );
// };

// export default Logout;
// src/components/TopBar/TopBar.js
// src/components/User/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBar.css'; 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('authToken');
    
    
    navigate('/login');
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <h1>My Application</h1>
          <button className="logout-button" onClick={handleLogout}>
            <i className="fas fa-user"></i> Logout
          </button>
        </div>
      </div>

      {/* Logout Page Content */}
      <div className="logout-content">
        <h2>You have been logged out</h2>
        <p>Thank you for using our application. You have been successfully logged out.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    </div>
  );
};

export default Logout;
