// frontend/src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

// 0 - STATE: store.getState()
// 1 - STORE: this "store" object
console.log('Initial state:', store.getState());

// 5 - SUBSCRIBE: listen for any state changes
store.subscribe(() => {
  console.log('Store changed:', store.getState());
});

export default store;
