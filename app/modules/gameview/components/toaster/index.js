import { connect } from 'react-redux';

import {
    getChapterProgress,
    getResult,
    getMessage
} from '../../selectors';

import Toaster from './layout';

const mapStateToProps = (state) => {
    const currentChapterIdx = getChapterProgress(state);

    return {
        result: getResult(state, currentChapterIdx),
        message: getMessage(state)
    };
};

export default connect(
    mapStateToProps
)(Toaster);
