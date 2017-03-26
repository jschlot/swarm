import { connect } from 'react-redux';

import {
    getFinalOutcome,
    getStoryEnding,
    getAlignmentScore,
    getAllResultsPerChapter
} from '../../selectors';

import {
    reset
} from '../../actions';

import Epilogue from './layout';

const mapStateToProps = (state) => {
    const finalOutcome = getFinalOutcome(state);

    return {
        storyEnding: getStoryEnding(state, finalOutcome),
        alignmentScore: getAlignmentScore(state),
        allResultsPerChapter: getAllResultsPerChapter(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReset: () => dispatch(reset())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Epilogue);
