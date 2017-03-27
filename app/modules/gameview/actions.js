import {
	MAKE_CHOICE,
    NEXT_CHAPTER,
    GOTO_STORY,
    GOTO_EPISODELIST,
    GOTO_EPISODE,
    GOTO_MAIN
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

export const gotoStory = id => (
    {
        type: GOTO_STORY,
        id
    }
);

export const gotoEpisodeList = () => (
    {
        type: GOTO_EPISODELIST
    }
);

export const gotoMain = () => (
    {
        type: GOTO_MAIN
    }
);
