import { connect } from 'react-redux';

import {
    getChapter,
    getChapterProgress,
    getOutcome
} from '../../selectors';

import {
    makeChoice,
    reset
} from '../../actions';

import Chapter from './layout';

const mapStateToProps = (state) => {
    const chapterProgress = getChapterProgress(state);
    return {
        chapterObj: getChapter(state, chapterProgress),
        outCome: getOutcome(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoice: (question, choice) => dispatch(makeChoice(question, choice)),
        onReset: () => dispatch(reset())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chapter);
