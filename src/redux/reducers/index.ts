import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import filters from "../reducers/filters";
import reglog from "../reducers/reglog";
import register from "../reducers/register";
import login from "../reducers/login";
import recovery_password from "../reducers/recovery_password";
import user from "../reducers/user";

export const rootReducer = combineReducers({
	filters,
	reglog,
	register,
	login,
	recovery_password,
	user,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
