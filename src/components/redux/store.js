import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import  {contactsReducer}  from './contacts';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ['filter'],
// };

//contacts: persistReducer(contactsPersistConfig, contactsReducer ),

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger],
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export { store} ;