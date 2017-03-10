import { connect } from 'react-redux';

import {
    getMessage,
    getChapterHeading,
    getChapterBody,
    getDecisionByChapter,
    getChapterProgress,
    getDecisionProgress,
    getResult,
    getAllResultsPerChapter,
    getScorecard,
    getFinalOutcome
} from './selectors';

import {
    makeChoice,
    nextChapter
} from './actions';

import Gameview from './layout';

const mapStateToProps = (state) => {
    const currentChapterIdx = getChapterProgress(state);
    const currentDecisionId = getDecisionProgress(state);

    return {
        currentChapterIdx,
        currentDecisionId,
        message: getMessage(state),
        heading: getChapterHeading(state, currentChapterIdx),
        body: getChapterBody(state, currentChapterIdx),
        decision: getDecisionByChapter(state, currentChapterIdx, currentDecisionId),
        result: getResult(state, currentChapterIdx),
        chapterReport: getAllResultsPerChapter(state),
        scorecardReport: getScorecard(state),
        getFinalOutcome: getFinalOutcome(state)
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
)(Gameview);
