import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { epilogue } from './styles.scss';

import Panel from '../panel/hoc';

const Epilogue = (props) => {
    const {
        onReset,
        storyEnding
    } = props;

    return (
		<div className="epilogue">
			<h2 className="epilogue__heading">
				epilogue
			</h2>
			<Panel timer="800">
				<div className="epilogue__story-ending">
					{ storyEnding }
				</div>
				<div className="epilogue__next" onClick={onReset}>
					play again
				</div>
			</Panel>
		</div>
    );
};

Epilogue.propTypes = {
    onReset: PropTypes.func,
    storyEnding: PropTypes.string
};

export default Epilogue;
