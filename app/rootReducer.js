import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameview from './modules/gameview/reducer';

const rootReducer = combineReducers({
    routing,
    gameview: gameview
});

export default rootReducer;
