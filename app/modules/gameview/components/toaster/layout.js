import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { toaster } from './styles.scss';

import Panel from '../panel/hoc';

const Toaster = (props) => {
    const {
        message,
        result
    } = props;

    // result
    const resultClass = classNames({
        'toaster__xp--good': result === 'good',
        'toaster__xp--evil': result === 'evil',
        'toaster__xp--lawful': result === 'lawful',
        'toaster__xp--chaotic': result === 'chaotic'
    });

    return (
        <div className="toaster">
            <Panel timer="600" position="right">
                <div className="toaster__message">{ message }</div>
                { result ? <div className={resultClass}>{result} points earned</div> : null }
            </Panel>
        </div>
		);
};

Toaster.propTypes = {
    message: PropTypes.string,
    result: PropTypes.string,
};

export default Toaster;
