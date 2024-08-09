
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('http://localhost:5000/api/login',
//         { email, password },
//         { headers: { 'Content-Type': 'application/json' } }
//       );
      
//       console.log(response, "response");

//       if (response.status === 200) {
//         // Handle successful login, e.g., redirect or store token
//         navigate('/homepage'); // Example redirect after successful login
//       } else {
//         setError('Login failed. Please try again.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.error || 'An unexpected error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//         {error && <p>{error}</p>}
//       </form>
//       <p><Link to="/forgot-password">Forgot your password?</Link></p>
//     </div>
//   );
// };

// export default Login;

// src/components/User/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      console.log(response, "response");

      if (response.status === 200) {
        // Handle successful login, e.g., redirect or store token
        navigate('/homepage'); // Example redirect after successful login
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>{error}</p>}
        <p><Link to="/forgot-password">Forgot your password?</Link></p>
      </form>
    </div>
  );
};

export default Login;
