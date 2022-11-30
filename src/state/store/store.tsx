import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { GetAllTodos} from "../Reducers/todoReducer";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  GetAllTodos,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk) // Rightnow no use of redux thunk middleware
    // other store enhancers if any
  )
);

let persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
export { store, persistor };
