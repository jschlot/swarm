import {
	MAKE_CHOICE,
    NEXT_CHAPTER,
    RESET,
    GOTO_EPISODE
} from './actionTypes';

export const makeChoice = (question, choice) => (
    {
        type: MAKE_CHOICE,
        question,
        choice
    }
);

export const gotoEpisode = (episode, index) => (
    {
        type: GOTO_EPISODE,
        episode,
        index
    }
);

export const reset = () => (
    {
        type: RESET
    }
);
