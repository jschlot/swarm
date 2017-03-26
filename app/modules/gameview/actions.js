import {
	MAKE_CHOICE,
    NEXT_CHAPTER,
    GOTO_BOOK,
    GOTO_EPISODE
} from './actionTypes';

export const makeChoice = (question, episodeIdx, choice) => (
    {
        type: MAKE_CHOICE,
        question,
        choice,
        episodeIdx
    }
);

export const gotoEpisode = (episode, index) => (
    {
        type: GOTO_EPISODE,
        episode,
        index
    }
);

export const gotoBook = () => (
    {
        type: GOTO_BOOK
    }
);
