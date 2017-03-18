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

    console.log(alignmentScore);
    console.log(allResultsPerChapter);

    return (
		<div className="epilogue">
			<h2 className="epilogue__heading">
				epilogue
			</h2>
			<Panel timer="800">
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
