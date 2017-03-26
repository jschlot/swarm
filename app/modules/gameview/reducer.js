import { combineReducers } from 'redux';

import {
    MAKE_CHOICE,
    RESET,
    GOTO_EPISODE
} from './actionTypes';

import { BOOK } from './constants';

const book = (state = BOOK, action) => state;

const choices = (state = [], action) => {
    switch (action.type) {
        case RESET:
            return [];
        case MAKE_CHOICE:
            return [
                ...state,
                Object.assign({}, {
                    question: action.question,
                    answer: action.choice
                })
            ];
        default:
            return state;
    }
};

const toaster = (state = '', action) => {
    switch (action.type) {
        case MAKE_CHOICE:
            return `${action.choice.text} chosen`;
        default:
            return state;
    }
};

const progress = (state = {episode: 0, chapter: null, last: null}, action) => {
    switch (action.type) {
        case RESET:
            return {episode: 0, chapter: null, last: null};
        case GOTO_EPISODE:
            return {
                ...state,
                episode: action.index,
                chapter: action.episode.start
            };
        case MAKE_CHOICE:
            return {
                ...state,
                chapter: action.choice.next,
                last: action.choice.alignment
            };
        default:
            return state;
    }
};

const score = (state = {}, action) => {
    switch (action.type) {
        case MAKE_CHOICE:
            const original =  state[action.choice.alignment] || 0;
            return {
                ...state,
                [action.choice.alignment]: action.choice.weight + original
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    choices,
    toaster,
    progress,
    score
});

export default reducer;
