import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { toaster } from './styles.scss';

import Panel from '../panel';

const Toaster = (props) => {
    const {
        message
    } = props;

    return (
        <div className="toaster">
            <Panel timer="600" position="top">
                <div className="toaster__message">{ message }</div>
            </Panel>
        </div>
		);
};

Toaster.propTypes = {
    message: PropTypes.string
};

export default Toaster;
