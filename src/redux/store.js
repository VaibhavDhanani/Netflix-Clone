import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

export const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
