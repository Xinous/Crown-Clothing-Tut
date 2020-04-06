import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user/user.reducer';

export default combineReducers({
	user : userReducer,
});
