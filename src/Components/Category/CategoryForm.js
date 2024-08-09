// // src/components/Category/CategoryForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addCategory } from '../../Redux/Actions/CategoryActions';

// const CategoryForm = () => {
//   const [categoryname, setCategoryname] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addCategory({ categoryname }));
//     setCategoryname('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={categoryname}
//         onChange={(e) => setCategoryname(e.target.value)}
//         placeholder="Category Name"
//       />
//       <button type="submit">Add Category</button>
//     </form>
//   );
// };

// export default CategoryForm;

// // src/components/Category/CategoryForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addCategory } from '../../Redux/Actions/CategoryActions';
// import './CategoryForm.css'; // Import the CSS file

// const CategoryForm = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     categoryname: '',
//     status: '',
//     sequence: '',
//   });
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addCategory(formData));
//     setFormData({
//       id: '',
//       categoryname: '',
//       status: '',
//       sequence: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="category-form">
//       <input
//         type="text"
//         name="id"
//         value={formData.id}
//         onChange={handleChange}
//         placeholder="ID"
//       />
//       <input
//         type="text"
//         name="categoryname"
//         value={formData.categoryname}
//         onChange={handleChange}
//         placeholder="Category Name"
//       />
//       <input
//         type="text"
//         name="status"
//         value={formData.status}
//         onChange={handleChange}
//         placeholder="Status"
//       />
//       <input
//         type="number"
//         name="sequence"
//         value={formData.sequence}
//         onChange={handleChange}
//         placeholder="Sequence"
//       />
//       <button type="submit">Add Category</button>
//     </form>
//   );
// };

// export default CategoryForm;


// src/components/Category/CategoryForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, updateCategory } from '../../Redux/Actions/CategoryActions';

const CategoryForm = ({ currentCategory, onClose }) => {
  const [categoryname, setCategoryname] = useState('');
  const [status, setStatus] = useState('');
  const [sequence, setSequence] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCategory) {
      setCategoryname(currentCategory.categoryname || '');
      setStatus(currentCategory.status || '');
      setSequence(currentCategory.sequence || '');
    }
  }, [currentCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryData = { categoryname, status, sequence };

    if (currentCategory) {
      dispatch(updateCategory(currentCategory._id, categoryData));
    } else {
      dispatch(addCategory(categoryData));
    }

    onClose(); // Close the form after submission
  };

  return (
    <div className="category-form">
      <h2>{currentCategory ? 'Edit Category' : 'Add Category'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryname}
          onChange={(e) => setCategoryname(e.target.value)}
          placeholder="Category Name"
          required
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
        <input
          type="number"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="Sequence"
        />
        <button type="submit">
          {currentCategory ? 'Update Category' : 'Add Category'}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
