import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { signin } from "./SigninReducer";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/es/storage/session";
const rootReducer = combineReducers({signin});

const persistConfig = {
  key: "root",
  blackList: [],
  storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [];

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, ...middleWare)
);

export const persistedStore = persistStore(store);
