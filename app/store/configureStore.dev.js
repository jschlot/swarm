import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import DevTools from '../modules/core/DevTools';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        DevTools.instrument()
    );

    return store;
}
