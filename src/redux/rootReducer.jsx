import { combineReducers } from "@reduxjs/toolkit";
import user from "./User/user";


const rootReducer = combineReducers({ user: user })

export default rootReducer;