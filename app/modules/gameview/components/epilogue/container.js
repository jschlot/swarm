import { connect } from 'react-redux';

import {
    getFinalOutcome,
    getStoryEnding
} from '../../selectors';

import {
    reset
} from '../../actions';

import Epilogue from './layout';

const mapStateToProps = (state) => {
    const finalOutcome = getFinalOutcome(state);

    return {
        storyEnding: getStoryEnding(state, finalOutcome)
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
