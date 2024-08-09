// src/Components/Subcategory/SubcategoryList.js

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSubcategories } from '../../Redux/Actions/SubcategoryActions';
// import SubcategoryItem from './SubcategoryItem';
// import SubcategoryForm from './SubcategoryForm';

// const SubcategoryList = () => {
//   const dispatch = useDispatch();
//   const subcategories = useSelector((state) => state.subcategoryList.subcategories);
//   const [currentSubcategory, setCurrentSubcategory] = useState(null);

//   useEffect(() => {
//     dispatch(fetchSubcategories());
//   }, [dispatch]);

//   return (
//     <div className="subcategory-list">
//       <h2>Subcategories</h2>
//       <SubcategoryForm currentSubcategory={currentSubcategory} setCurrentSubcategory={setCurrentSubcategory} />
//       <div className="subcategory-items">
//         {subcategories.map((subcategory) => (
//           <SubcategoryItem
//             key={subcategory._id}
//             subcategory={subcategory}
//             setCurrentSubcategory={setCurrentSubcategory}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubcategoryList;

// src/Components/Subcategory/SubcategoryList.js
// src/Components/Subcategory/SubcategoryList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubcategories, deleteSubcategory } from '../../Redux/Actions/SubcategoryActions';
import SubcategoryItem from './SubcategoryItem'; // Ensure you import SubcategoryItem

const SubcategoryList = () => {
  const dispatch = useDispatch();
  const subcategories = useSelector((state) => state.subcategories.subcategories);

  useEffect(() => {
    dispatch(fetchSubcategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSubcategory(id));
  };

  return (
    <div>
      <h2>Subcategories</h2>
      <ul>
        {subcategories.map((subcategory) => (
          <SubcategoryItem
            key={subcategory._id}
            subcategory={subcategory}
            onDelete={() => handleDelete(subcategory._id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubcategoryList;
