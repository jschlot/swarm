import { NAME, BOOK } from './constants';

const root = state => state[NAME];
	export const getMessage = state => root(state).toaster;

	const gameProgress = state => root(state).progress;
	export const getChapterProgress = state => gameProgress(state).chapter;
	export const getDecisionProgress = state => gameProgress(state).decision;

	const book = state => BOOK;
		const getChapter = (state, chapterIndex) => book(state).chapter[chapterIndex];
			export const getChapterHeading = (state, chapterIndex) => getChapter(state, chapterIndex) && getChapter(state, chapterIndex).title;
			export const getChapterBody = (state, chapterIndex) => getChapter(state, chapterIndex) && getChapter(state, chapterIndex).body;

		const getDecision = (state, index) => book(state).decision[index];
			export const getDecisionByChapter = (state, chapterIndex, index) => getChapter(state, chapterIndex) && getDecision(state, getChapter(state, chapterIndex).decisions[index]) || {};

const choices = state => root(state).choices;

export const getResult = (state, chapterIdx) => {
    if (!choices(state)) return '';

    const countedAlignments = choices(state).reduce((alignments, obj) => {
        const chapter = obj.chapter;
        if (chapter !== chapterIdx) return alignments;
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key]++;
        } else {
            alignments[key] = 1;
        }
        return alignments;
    }, {});

    let report = '';

    if (Object.keys(countedAlignments).length) {
        report = Object.keys(countedAlignments).reduce((a, b) => { return countedAlignments[a] > countedAlignments[b] ? a : b; });
    }

    return report;
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

    const countedAlignments = choices(state).reduce((alignments, obj) => {
        const key = obj.answer.alignment;
        if (key in alignments) {
            alignments[key]++;
        } else {
            alignments[key] = 1;
        }
        return alignments;
    }, {});

    return countedAlignments;
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

    let report = '';

    if (Object.keys(countedAlignments).length) {
        report = Object.keys(countedAlignments).reduce((a, b) => { return countedAlignments[a] > countedAlignments[b] ? a : b; });
    }

    return report;
};
