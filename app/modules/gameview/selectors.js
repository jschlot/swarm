import {samplebook} from '../stories/samplebook';
import { NAME } from './constants';

const root = state => state[NAME];

// Toaster
export const getMessage = state => root(state).toaster;

// Story, Chapters, Decisions
const book = state => samplebook;

export const getBackgroundVideo = state => book(state).meta.backgroundVideo;
export const getStoryTitle = state => book(state).meta.title;
export const getStoryDescription = state => book(state).meta.description;

export const getEpisodes = state => book(state).episodes;

// Navigation
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

export const getLastChoice = state => gameProgress(state).last;

export const getOutcome = state => {
    if (!root(state).score) {
        return '';
    }

    const obj = root(state).score;

    let highestCount = undefined;

    Object.keys(obj).forEach(o => {
        if (!highestCount) {
            highestCount = obj[o];
        } else if (highestCount < obj[o]) {
            highestCount = obj[o];
        }
    });

    const matches = Object.keys(obj).filter(o => {
        return obj[o] === highestCount;
    });

    return matches[0];
};
