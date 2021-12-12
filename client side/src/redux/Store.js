import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import cartReducer from './cartRedux'
import userReducer from './userReducer'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import  persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const rootReducer = combineReducers({user: userReducer , cart: cartReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = () => configureStore({
//     reducer: persistedReducer ,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

const store = configureStore({
    reducer: persistedReducer,
});

export default store;


//export let persistor = persistStore(store)