import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./root-reducer";
// import logger from "redux-logger";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   // You can add other options here such as devTools, enhancers, etc.
// });

// export default store;
