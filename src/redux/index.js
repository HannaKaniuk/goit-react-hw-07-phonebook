import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsApi } from './services';
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
