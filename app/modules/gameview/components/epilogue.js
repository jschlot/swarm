import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Panel from '../../panel/container';

const Epilogue = (props) => {
    const {
        onReset,
        storyEnding
    } = props;

    return (
		<div className="gameview__content">
			<h2 className="gameview__heading">
				epilogue
			</h2>
			<Panel timer="800">
				<div className="gameview__subheading">
					{ storyEnding }
				</div>
				<div className="gameview__next" onClick={onReset}>
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
