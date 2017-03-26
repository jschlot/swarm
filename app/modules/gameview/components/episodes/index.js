import { connect } from 'react-redux';

import {
	getEpisodes,
	getStoryTitle,
	getStoryDescription,
    getHistory
} from '../../selectors';

import {
    gotoEpisode
} from '../../actions';

import Episodes from './layout';

const mapStateToProps = (state) => {
    return {
        episodeList: getEpisodes(state),
        storyTitle: getStoryTitle(state),
        storyDescription: getStoryDescription(state),
        history: getHistory(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChooseEpisode: (episode, index) => dispatch(gotoEpisode(episode, index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Episodes);
