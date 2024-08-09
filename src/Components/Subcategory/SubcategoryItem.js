// // src/Components/Subcategory/SubcategoryItem.js

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteSubcategory } from '../../Redux/Actions/SubcategoryActions'

// const SubcategoryItem = ({ subcategory, setCurrentSubcategory }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     if (window.confirm('Are you sure you want to delete this subcategory?')) {
//       dispatch(deleteSubcategory(subcategory._id));
//     }
//   };

//   return (
//     <div className="subcategory-item">
//       <h3>{subcategory.name}</h3>
//       <p>{subcategory.description}</p>
//       <button onClick={() => setCurrentSubcategory(subcategory)}>Edit</button>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default SubcategoryItem;
// src/Components/Subcategory/SubcategoryItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSubcategory } from '../../Redux/Actions/SubcategoryActions'; // Make sure this path is correct

const SubcategoryItem = ({ subcategory }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSubcategory(subcategory._id));
  };

  return (
    <div>
      <p>{subcategory.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SubcategoryItem;
