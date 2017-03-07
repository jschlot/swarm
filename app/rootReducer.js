import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import landing from './modules/landing';

const rootReducer = combineReducers({
    routing,
    [landing.constants.NAME]: landing.reducer
});

export default rootReducer;
