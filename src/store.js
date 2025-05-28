import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homepageReducer from './features/homepage/HomepageSlice';
import allSectionsReducer from './features/homepage/Allsections';
import { apiSlice } from './services/apiService';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Persist config for `allSections`
const allSectionsPersistConfig = {
  key: 'allSections',
  storage,
  whitelist: ['data'], // whitelist fields you want to persist
};

// Combine reducers
const rootReducer = combineReducers({
  homepage: homepageReducer,
  allSections: persistReducer(allSectionsPersistConfig, allSectionsReducer),
  [apiSlice.reducerPath]: apiSlice.reducer,
});

// Store config
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

// Persistor
export const persistor = persistStore(store);

export default store;
