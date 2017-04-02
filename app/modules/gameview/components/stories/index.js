import { connect } from 'react-redux';

import {
	getStoryList,
    getGameTitle,
    getGameDescription,
    getGameAuthor
} from '../../selectors';

import {
	gotoStory
} from '../../actions';

import Stories from './layout';

const mapStateToProps = (state) => {
    return {
        storyList: getStoryList(state),
        name: getGameTitle(state),
        subtitle: getGameDescription(state),
        author: getGameAuthor(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChooseStory: id => dispatch(gotoStory(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stories);
