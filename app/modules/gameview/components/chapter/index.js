import { connect } from 'react-redux';

import {
    getChapterId,
    getChapterTitle,
    getChapterBody,
    getChapterOptions,
    getChapterProgress,
    getEpisodeProgress
} from '../../selectors';

import {
    makeChoice,
    gotoEpisodeList
} from '../../actions';

import Chapter from './layout';

const mapStateToProps = (state) => {
    const chapterProgress = getChapterProgress(state);
    return {
        chapterId: getChapterId(state, chapterProgress),
        title: getChapterTitle(state, chapterProgress),
        body: getChapterBody(state, chapterProgress),
        options: getChapterOptions(state, chapterProgress),
        episodeIdx: getEpisodeProgress(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoice: (question, episodeIdx, choice) => dispatch(makeChoice(question, episodeIdx, choice)),
        onGoToEpisodeList: () => dispatch(gotoEpisodeList())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chapter);
