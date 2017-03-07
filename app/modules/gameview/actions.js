import {
	MAKE_CHOICE,
    NEXT_CHAPTER
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
