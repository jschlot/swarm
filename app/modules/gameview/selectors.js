import * as stories from '../stories';
import { NAME, VIDEO, TITLE, DESCRIPTION, AUTHOR } from './constants';

// UTILS
const containsAll = (arr1, arr2) => arr2.every(arr2Item => arr1.includes(arr2Item));
const sameMembers = (arr1, arr2) => containsAll(arr1, arr2) && containsAll(arr2, arr1);

// ROOT = GAME VIEW
const root = state => state[NAME];

// TOASTER
export const getMessage = state => root(state).toaster;

// BACKGROUND
export const getBackgroundVideo = state => VIDEO;
export const getGameTitle = state => TITLE;
export const getGameDescription = state => DESCRIPTION;
export const getGameAuthor = state => AUTHOR;


// NAVIGATION
const gameProgress = state => root(state).progress;
export const getStoryProgress = state => gameProgress(state).story;
export const getEpisodeProgress = state => gameProgress(state).episode;
export const getChapterProgress = state => gameProgress(state).chapter;
export const getStoryMode = state => {
    if (getChapterProgress(state) !== null) {
        return 'chapter';
    }

    if (getEpisodeProgress(state) !== null) {
        return 'episodes';
    }

    return 'stories';
};

// STORIES
export const getStoryList = state => stories;
const book = state => getStoryList(state)[getStoryProgress(state)];
export const getStoryTitle = state => book(state).meta.title;
export const getStoryDescription = state => book(state).meta.description;


// EPISODES
export const getEpisodes = state => book(state).episodes || [];

export const getCurrentEpisode = state => getEpisodes(state)[getEpisodeProgress(state)] || {};

// CHOICES
export const choices = state => root(state).choices;

// TOGGLES
export const toggles = state => root(state).toggles;

// ALIGNMENTS
export const getOutcome = state => {
    if (!root(state).score) {
        return '';
    }

    const scores = root(state).score;

    let highestCount = undefined;

    Object.keys(scores).forEach(o => {
        if (!highestCount) {
            highestCount = scores[o].tally;
        } else if (highestCount < scores[o].tally) {
            highestCount = scores[o].tally;
        }
    });

    const matches = Object.keys(scores).filter(o => {
        return scores[o].tally === highestCount;
    });

    return matches[0];
};

export const hasAlignment = (state, alignment) => {
    if (!root(state).score) {
        return false;
    }
    return root(state).score[alignment];
};

// CHAPTER
export const getChapter = (state, currentChapterId) => {
    return getCurrentEpisode(state).chapters[currentChapterId] || {};
};
export const getChapterTitle = (state, chapterProgress) => getChapter(state, chapterProgress).title || 'chapter one';
export const getChapterId = (state, chapterProgress) => getChapter(state, chapterProgress).id;
export const getChapterBody = (state, chapterProgress) => {
    const outcome = getOutcome(state);
    const chapterObj = getChapter(state, chapterProgress);
    return chapterObj.body[outcome] ? chapterObj.body[outcome] : chapterObj.body.default;
};

export const getChapterOptions = (state, chapterProgress) => {
    const options = getChapter(state, chapterProgress).options || null;
    const outcome = getOutcome(state);

    return options && options.filter((obj) => {
        if (obj.conditional) {
            let match = -1;
            if (obj.conditional.alignment && obj.conditional.alignment === outcome) {
                match++;
            }
            if (obj.conditional.contains) {
                if (sameMembers(obj.conditional.contains, Object.keys(toggles(state)))) {
                    match++;
                }
            }
            if (obj.conditional.exclude) {
                return !(Object.keys(toggles(state)).includes(obj.conditional.exclude));
            }
            return match >= 0;
        }
        return true;
    });
};
