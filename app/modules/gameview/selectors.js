import { NAME, BOOK } from './constants';

const root = state => state[NAME];
export const getMessage = state => root(state).toaster;

const gameProgress = state => root(state).progress;
export const getChapterProgress = state => gameProgress(state).chapter;
export const getDecisionProgress = state => gameProgress(state).decision;

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
    const defaultValue = story.outcomes.default || '';
    return (alignment && story.outcomes[alignment]) ? story.outcomes[alignment] : defaultValue;
};

const getDecision = (state, index) => book(state).decision[index];
export const getDecisionByChapter = (state, chapterIndex, index) => {
    return getChapter(state, chapterIndex) && getDecision(state, getChapter(state, chapterIndex).decisions[index]) || {};
};

const choices = state => root(state).choices;

export const getResult = (state, chapterIdx) => {
    if (!choices(state)) return '';

    const countedAlignments = choices(state).reduce((alignments, obj) => {
        if (obj.chapter !== chapterIdx) return alignments;
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key]++;
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

export const getScorecard = (state) => {
    if (!choices(state)) return '';

    return choices(state).reduce((alignments, obj) => {
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key]++;
        } else {
            alignments[key] = 1;
        }
        return alignments;
    }, {});
};

export const getFinalOutcome = (state) => {
    if (!choices(state)) return '';

    const countedAlignments = choices(state).reduce((alignments, obj) => {
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key]++;
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
