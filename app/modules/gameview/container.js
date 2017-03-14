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
    getFinalOutcome,
    getChapterEnding,
    getStoryEnding,
    getBackgroundVideo
} from './selectors';

import {
    makeChoice,
    nextChapter,
    reset
} from './actions';

import Gameview from './layout';

const mapStateToProps = (state) => {
    const currentChapterIdx = getChapterProgress(state);
    const currentDecisionId = getDecisionProgress(state);
    const result = getResult(state, currentChapterIdx);
    const finalOutcome = getFinalOutcome(state);

    return {
        currentChapterIdx,
        currentDecisionId,
        result,
        finalOutcome,
        message: getMessage(state),
        heading: getChapterHeading(state, currentChapterIdx),
        body: getChapterBody(state, currentChapterIdx),
        decision: getDecisionByChapter(state, currentChapterIdx, currentDecisionId),
        chapterReport: getAllResultsPerChapter(state),
        scorecardReport: getScorecard(state),
        chapterEnding: getChapterEnding(state, currentChapterIdx, result),
        storyEnding: getStoryEnding(state, finalOutcome),
        backgroundVideo: getBackgroundVideo(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoice: (question, choice, chapterIdx) => dispatch(makeChoice(question, choice, chapterIdx)),
        onNext: () => dispatch(nextChapter()),
        onReset: () => dispatch(reset())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gameview);
