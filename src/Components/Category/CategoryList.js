// // src/components/Category/CategoryList.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, deleteCategory } from '../../Redux/Actions/CategoryActions';

// const CategoryList = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categories);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteCategory(id));
//   };

//   return (
//     <div>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category._id}>
//             {category.categoryname} <button onClick={() => handleDelete(category._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryList;

// src/components/Category/CategoryList.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, deleteCategory } from '../../Redux/Actions/CategoryActions';
// import './CategoryList.css'; // Import the CSS file

// const CategoryList = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categories);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteCategory(id));
//   };

//   return (
//     <div className="category-list">
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category._id}>
//             {category.categoryname}
//             <button onClick={() => handleDelete(category._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryList;


// // src/components/Category/CategoryList.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, deleteCategory, updateCategory } from '../../Redux/Actions/CategoryActions';
// import CategoryEditForm from './CategoryEditForm';
// import './CategoryList.css'; // Import the CSS file

// const CategoryList = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categories);
//   const [editingCategory, setEditingCategory] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteCategory(id));
//   };

//   const handleEdit = (category) => {
//     setEditingCategory(category);
//   };

//   const handleCancel = () => {
//     setEditingCategory(null);
//   };

//   return (
//     <div className="category-list">
//       <h2>Categories</h2>
//       {editingCategory ? (
//         <CategoryEditForm category={editingCategory} onCancel={handleCancel} />
//       ) : (
//         <ul>
//           {categories.map((category) => (
//             <li key={category._id}>
//               {category.categoryname}
//               <button onClick={() => handleEdit(category)}>Edit</button>
//               <button onClick={() => handleDelete(category._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CategoryList;


// src/components/Category/CategoryList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from '../../Redux/Actions/CategoryActions';
import CategoryForm from './CategoryForm';
import './CategoryList.css'; // Import the CSS file for styling

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  const handleCloseForm = () => {
    setEditingCategory(null);
    setShowForm(false);
  };

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <button onClick={() => setShowForm(true)}>Add New Category</button>
      {showForm && (
        <CategoryForm
          currentCategory={editingCategory}
          onClose={handleCloseForm}
        />
      )}
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.categoryname}
            <button onClick={() => handleEdit(category)}>Edit</button>
            <button onClick={() => handleDelete(category._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
