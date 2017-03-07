import { combineReducers } from 'redux';

import {
    MAKE_CHOICE,
    NEXT_CHAPTER
} from './actionTypes';

import { BOOK } from './constants';

const book = (state = BOOK, action) => state;

const choices = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_CHOICE':
            return [
                ...state,
                Object.assign({}, {
                    chapter: action.chapterIdx,
                    decision: action.question.id,
                    question: action.question.text,
                    answer: action.choice
                })
            ];
        default:
            return state;
    }
};

const toaster = (state = '', action) => {
    switch (action.type) {
        case 'MAKE_CHOICE':
            return `${action.choice.text} chosen`;
        case 'NEXT_CHAPTER':
            return '';
        default:
            return state;
    }
};

const progress = (state = {chapter: 0, decision: 0}, action) => {
    switch (action.type) {
        case 'MAKE_CHOICE':
            const decision = state.decision + 1;
            return {
                ...state,
                decision
            };
        case 'NEXT_CHAPTER':
            const chapter = state.chapter + 1;
            return {
                decision: 0,
                chapter
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    choices,
    toaster,
    progress
});

export default reducer;
