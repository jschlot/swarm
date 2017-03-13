import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameview from './modules/gameview';

const rootReducer = combineReducers({
    routing,
    [gameview.constants.NAME]: gameview.reducer
});

export default rootReducer;
