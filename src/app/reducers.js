import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'src/features/auth/authSlice';

export default combineReducers({
  auth: authReducer,
  // user: userReducer,
  // product: productReducer,
  // brand: brandReducer,
  // category: categoryReducer,
  // countryData: countryReducer,
});
