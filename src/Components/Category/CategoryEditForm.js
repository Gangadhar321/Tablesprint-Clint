// src/components/Category/CategoryEditForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../Redux/Actions/CategoryActions';
import './CategoryEditForm.css'; // Import the CSS file for styling

const CategoryEditForm = ({ category, onCancel }) => {
  const [categoryname, setCategoryname] = useState(category.categoryname);
  const [status, setStatus] = useState(category.status || 'active');
  const [sequence, setSequence] = useState(category.sequence || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategory({ id: category._id, categoryname, status, sequence }));
    onCancel(); // Close the edit form after submission
  };

  return (
    <form className="category-edit-form" onSubmit={handleSubmit}>
      <div>
        <label>Category Name:</label>
        <input
          type="text"
          value={categoryname}
          onChange={(e) => setCategoryname(e.target.value)}
          placeholder="Category Name"
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label>Sequence:</label>
        <input
          type="number"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="Sequence"
          required
        />
      </div>
      <button type="submit">Update Category</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default CategoryEditForm;
