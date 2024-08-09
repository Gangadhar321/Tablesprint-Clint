// // src/Components/Subcategory/SubcategoryForm.js

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addSubcategory, updateSubcategory } from '../../Redux/Actions/SubcategoryActions'

// const SubcategoryForm = ({ currentSubcategory, setCurrentSubcategory }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (currentSubcategory) {
//       setName(currentSubcategory.name);
//       setDescription(currentSubcategory.description);
//     }
//   }, [currentSubcategory]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const subcategoryData = { name, description };

//     if (currentSubcategory) {
//       dispatch(updateSubcategory(currentSubcategory._id, subcategoryData));
//     } else {
//       dispatch(addSubcategory(subcategoryData));
//     }

//     clearForm();
//   };

//   const clearForm = () => {
//     setName('');
//     setDescription('');
//     setCurrentSubcategory(null);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Subcategory Name</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">
//         {currentSubcategory ? 'Update Subcategory' : 'Add Subcategory'}
//       </button>
//       {currentSubcategory && (
//         <button type="button" onClick={clearForm}>
//           Cancel
//         </button>
//       )}
//     </form>
//   );
// };

// export default SubcategoryForm;
// src/Components/Subcategory/SubcategoryForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSubcategory, updateSubcategory } from '../../Redux/Actions/SubcategoryActions';

const SubcategoryForm = ({ currentSubcategory, setCurrentSubcategory }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSubcategory) {
      setName(currentSubcategory.name);
      setDescription(currentSubcategory.description);
    }
  }, [currentSubcategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subcategoryData = { name, description };

    if (currentSubcategory) {
      dispatch(updateSubcategory(currentSubcategory._id, subcategoryData));
    } else {
      dispatch(addSubcategory(subcategoryData));
    }

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setCurrentSubcategory(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Subcategory Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {currentSubcategory ? 'Update Subcategory' : 'Add Subcategory'}
      </button>
      {currentSubcategory && (
        <button type="button" onClick={clearForm}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default SubcategoryForm;
