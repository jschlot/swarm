import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { epilogue } from './styles.scss';

import Panel from '../panel/hoc';

const Epilogue = (props) => {
    const {
        onReset,
        storyEnding,
		alignmentScore,
		allResultsPerChapter
    } = props;

    return (
		<div className="epilogue">
			<Panel timer="600">
				<h2 className="epilogue__heading">
					epilogue
				</h2>
			</Panel>
			<Panel timer="1200">
				<div className="epilogue__story-ending">
					{ storyEnding }
				</div>
			</Panel>
			<Panel timer="5000">
				<div className="epilogue__next" onClick={onReset}>
					play again
				</div>
			</Panel>
		</div>
    );
};

Epilogue.propTypes = {
    onReset: PropTypes.func,
    storyEnding: PropTypes.string,
    alignmentScore: PropTypes.object,
    allResultsPerChapter: PropTypes.object
};

export default Epilogue;
