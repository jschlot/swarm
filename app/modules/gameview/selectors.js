import * as stories from '../stories';
import { NAME } from './constants';

// ROOT = GAMEVIEW
const root = state => state[NAME];

// TOASTER
export const getMessage = state => root(state).toaster;

// NAVIGATION
const gameProgress = state => root(state).progress;
export const getCurrentStory = state => gameProgress(state).story || '';
export const getEpisodeProgress = state => gameProgress(state).episode || 0;
export const getChapterProgress = state => gameProgress(state).chapter || '';
export const getStoryMode = state => {
    if (getChapterProgress(state)) {
        return 'chapter';
    }
    return 'episodes';
};

// STORY STRUCTURE
const book = state => stories[getCurrentStory(state)];
export const getEpisodes = state => book(state).episodes;
export const getCurrentEpisode = state => getEpisodes(state)[getEpisodeProgress(state)] || {};
export const getChapter = (state, currentChapterId) => {
    return getCurrentEpisode(state).chapters[currentChapterId] || {};
};
export const getBackgroundVideo = state => book(state).meta.backgroundVideo;
export const getStoryTitle = state => book(state).meta.title;
export const getStoryDescription = state => book(state).meta.description;


// CHOICES
export const choices = state => root(state).choices;

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
