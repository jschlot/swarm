import { connect } from 'react-redux';

import {
	getEpisodes,
    getEpisodeProgress,
	getStoryTitle,
	getStoryDescription
} from '../../selectors';

import {
    gotoEpisode,
    gotoMain
} from '../../actions';

import Episodes from './layout';

const mapStateToProps = (state) => {
    return {
        currentEpisode: getEpisodeProgress(state),
        episodeList: getEpisodes(state),
        storyTitle: getStoryTitle(state),
        storyDescription: getStoryDescription(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChooseEpisode: (episode, index) => dispatch(gotoEpisode(episode, index)),
        ongotoMain: () => dispatch(gotoMain())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Episodes);
