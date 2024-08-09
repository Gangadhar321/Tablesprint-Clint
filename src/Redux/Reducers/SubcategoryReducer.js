// src/Redux/Reducers/SubcategoryReducer.js

import {
    FETCH_SUBCATEGORIES_SUCCESS,
    ADD_SUBCATEGORY_SUCCESS,
    UPDATE_SUBCATEGORY_SUCCESS,
    DELETE_SUBCATEGORY_SUCCESS,
} from '../Actions/SubcategoryActions';

const initialState = {
    subcategories: [],
};

const SubcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUBCATEGORIES_SUCCESS:
            return { ...state, subcategories: action.payload };

        case ADD_SUBCATEGORY_SUCCESS:
            return { ...state, subcategories: [...state.subcategories, action.payload] };

        case UPDATE_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                subcategories: state.subcategories.map((subcategory) =>
                    subcategory._id === action.payload._id ? action.payload : subcategory
                ),
            };

        case DELETE_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                subcategories: state.subcategories.filter(
                    (subcategory) => subcategory._id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default SubcategoryReducer; // Export as default
