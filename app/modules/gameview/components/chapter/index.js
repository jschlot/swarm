import { connect } from 'react-redux';

import {
    getChapterProgress,
    getDecisionProgress,
    getResult,
    getFinalOutcome,
    getChapterHeading,
    getChapterBody,
    getDecisionByChapter,
    getChapterEnding
} from '../../selectors';

import {
    makeChoice,
    nextChapter
} from '../../actions';

import Chapter from './layout';

const mapStateToProps = (state) => {
    const currentChapterIdx = getChapterProgress(state);
    const currentDecisionId = getDecisionProgress(state);
    const result = getResult(state, currentChapterIdx);

    return {
        currentChapterIdx,
        heading: getChapterHeading(state, currentChapterIdx),
        body: getChapterBody(state, currentChapterIdx),
        decision: getDecisionByChapter(state, currentChapterIdx, currentDecisionId),
        chapterEnding: getChapterEnding(state, currentChapterIdx, result)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoice: (question, choice, chapterIdx) => dispatch(makeChoice(question, choice, chapterIdx)),
        onNext: () => dispatch(nextChapter())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chapter);
