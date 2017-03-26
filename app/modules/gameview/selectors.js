import {samplebook} from '../stories/samplebook';
import { NAME } from './constants';

// ROOT = GAMEVIEW
const root = state => state[NAME];

// TOASTER
export const getMessage = state => root(state).toaster;

// STORY STRUCTURE
const book = state => samplebook;
export const getBackgroundVideo = state => book(state).meta.backgroundVideo;
export const getStoryTitle = state => book(state).meta.title;
export const getStoryDescription = state => book(state).meta.description;
export const getEpisodes = state => book(state).episodes;

// NAVIGATION
const gameProgress = state => root(state).progress;
export const getEpisodeProgress = state => gameProgress(state).episode || 0;
export const getChapterProgress = state => gameProgress(state).chapter || '';
export const getStoryMode = state => {
    if (getChapterProgress(state)) {
        return 'chapter';
    }
    return 'episodes';
};
export const currentEpisode = state => getEpisodes(state)[getEpisodeProgress(state)] || {};
export const getChapter = (state, currentChapterId) => {
    return currentEpisode(state).chapters[currentChapterId] || {};
};


// CHOICES
export const getLastChoice = state => gameProgress(state).last;
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
            highestCount = scores[o];
        } else if (highestCount < scores[o]) {
            highestCount = scores[o];
        }
    });

    const matches = Object.keys(scores).filter(o => {
        return scores[o] === highestCount;
    });

    return matches[0];
};
export const hasAlignment = (state, alignment) => {
    if (!root(state).score) {
        return false;
    }
    return root(state).score[alignment];
};
