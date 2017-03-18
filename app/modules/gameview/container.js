import { connect } from 'react-redux';

import {
    getBackgroundVideo,
    getStoryMode
} from './selectors';

import Gameview from './layout';

const mapStateToProps = (state) => {
    return {
        backgroundVideo: getBackgroundVideo(state),
        storyMode: getStoryMode(state)
    };
};

export default connect(
    mapStateToProps
)(Gameview);
