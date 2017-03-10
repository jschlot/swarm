import {
	MAKE_CHOICE,
    NEXT_CHAPTER,
    RESET
} from './actionTypes';

export const makeChoice = (question, choice, chapterIdx) => (
    {
        type: MAKE_CHOICE,
        question,
        choice,
        chapterIdx
    }
);

export const nextChapter = () => (
    {
        type: NEXT_CHAPTER
    }
);

export const reset = () => (
    {
        type: RESET
    }
);
