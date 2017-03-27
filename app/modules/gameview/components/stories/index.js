import { connect } from 'react-redux';

import {
	getStoryList
} from '../../selectors';

import {
	gotoStory
} from '../../actions';

import Stories from './layout';

const mapStateToProps = (state) => {
    return {
        storyList: getStoryList(state)
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
