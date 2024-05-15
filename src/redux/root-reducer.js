import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./User/user.reducer";




const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
