import { NAME, BOOK } from './constants';

const root = state => state[NAME];

// Toaster
export const getMessage = state => root(state).toaster;

// Story, Chapters, Decisions
const book = state => BOOK;

export const getBackgroundVideo = state => book(state).theme.backgroundVideo;

const getChapter = (state, chapterIndex) => book(state).chapter[chapterIndex];
export const getChapterHeading = (state, chapterIndex) => getChapter(state, chapterIndex) && getChapter(state, chapterIndex).title;
export const getChapterBody = (state, chapterIndex) => getChapter(state, chapterIndex) && getChapter(state, chapterIndex).body;

export const getChapterEnding = (state, chapterIndex, alignment) => {
    const chapter = getChapter(state, chapterIndex);
    if (!chapter) return '';
    const defaultValue = chapter.endings.default || '';
    return (alignment && chapter.endings[alignment]) ? chapter.endings[alignment] : defaultValue;
};

export const getStoryEnding = (state, alignment) => {
    const story = book(state);
    const defaultValue = story.outcome.default || '';
    return (alignment && story.outcome[alignment]) ? story.outcome[alignment] : defaultValue;
};

const getDecision = (state, index) => book(state).decision[index];
export const getDecisionByChapter = (state, chapterIndex, index) => {
    return getChapter(state, chapterIndex) && getDecision(state, getChapter(state, chapterIndex).decisions[index]) || {};
};

// Navigation
const gameProgress = state => root(state).progress;
export const getChapterProgress = state => gameProgress(state).chapter;
export const getDecisionProgress = state => gameProgress(state).decision;
export const getStoryMode = state => (getChapterProgress(state) === book(state).chapter.length) ? 'epilogue' : 'chapter';

// Choices & Reports
const choices = state => root(state).choices;

export const getResult = (state, chapterIdx) => {
    if (!choices(state)) return '';

    const countedAlignments = choices(state).reduce((alignments, obj) => {
        if (obj.chapter !== chapterIdx) return alignments;
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key] = alignments[key] + obj.answer.weight;
        } else {
            alignments[key] = 1;
        }
        return alignments;
    }, {});

    if (Object.keys(countedAlignments).length) {
        return Object.keys(countedAlignments).reduce((a, b) => {
            return countedAlignments[a] > countedAlignments[b] ? a : b;
        });
    }

    return '';
};

export const getAllResultsPerChapter = (state) => {
    if (!choices(state)) return {};

    const report = {};
    choices(state).forEach(obj => {
        report[obj.chapter] = {
            title: BOOK.chapter[obj.chapter].title,
            result: getResult(state, obj.chapter)
        };
    });

    return report;
};

export const getAlignmentScore = (state) => {
    if (!choices(state)) return '';

    return choices(state).reduce((alignments, obj) => {
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key] = {
                count: alignments[key].count + 1,
                sum: alignments[key].sum + obj.answer.weight
            };
        } else {
            alignments[key] = {
                count: 1,
                sum: obj.answer.weight
            };
        }
        return alignments;
    }, {});
};

export const getFinalOutcome = (state) => {
    if (!choices(state)) return '';

    const countedAlignments = getAlignmentScore(state);

    if (Object.keys(countedAlignments).length) {
        return Object.keys(countedAlignments).reduce((a, b) => {
            return countedAlignments[a] > countedAlignments[b] ? a : b;
        });
    }

    return '';
};
