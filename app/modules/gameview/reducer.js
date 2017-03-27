import { combineReducers } from 'redux';

import {
    MAKE_CHOICE,
    GOTO_STORY,
    GOTO_EPISODE,
    GOTO_EPISODELIST,
    GOTO_MAIN
} from './actionTypes';

import { BOOK } from './constants';

const book = (state = BOOK, action) => state;

const choices = (state = [], action) => {
    switch (action.type) {
        case MAKE_CHOICE:
            return [
                ...state,
                Object.assign({}, {
                    episodeIdx: action.episodeIdx,
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
        case GOTO_EPISODELIST:
            return '';
        case MAKE_CHOICE:
            return `you ${action.choice.text}`;
        default:
            return state;
    }
};

const progress = (state = {story: null, episode: null, chapter: null}, action) => {
    switch (action.type) {
        case GOTO_STORY:
            return {
                story: action.id,
                episode: 0,
                chapter: null
            };
        case GOTO_MAIN:
            return {
                story: null,
                episode: null,
                chapter: null
            };
        case GOTO_EPISODELIST:
            return {
                ...state,
                episode: state.episode + 1,
                chapter: null
            };
        case GOTO_EPISODE:
            return {
                ...state,
                episode: action.index,
                chapter: action.episode.start
            };
        case MAKE_CHOICE:
            return {
                ...state,
                chapter: action.choice.next
            };
        default:
            return state;
    }
};

const score = (state = {}, action) => {
    switch (action.type) {
        case MAKE_CHOICE:
            const originalTally =  state[action.choice.alignment] && state[action.choice.alignment].tally || 0;
            const originalCount =  state[action.choice.alignment] && state[action.choice.alignment].count || 0;
            return {
                ...state,
                [action.choice.alignment]: {
                    tally: action.choice.weight + originalTally,
                    count: 1 + originalCount
                }
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
