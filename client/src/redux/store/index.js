import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["authReducer"],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
// persistor.purge();
