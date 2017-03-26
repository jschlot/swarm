import { connect } from 'react-redux';

import {
    getMessage
} from '../../selectors';

import Toaster from './layout';

const mapStateToProps = (state) => {
    return {
        message: getMessage(state)
    };
};

export default connect(
    mapStateToProps
)(Toaster);
