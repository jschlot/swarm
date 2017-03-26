import { connect } from 'react-redux';

import {
    getChapter,
    getChapterProgress,
    getEpisodeProgress,
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
        outCome: getOutcome(state),
        episodeIdx: getEpisodeProgress(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoice: (question, episodeIdx, choice) => dispatch(makeChoice(question, episodeIdx, choice)),
        onReset: () => dispatch(reset())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chapter);
