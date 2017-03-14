import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Panel from '../../panel/container';

const Epilogue = (props) => {
    const {
        chapterReport,
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
				<div className="gameview__results">
					{ Object.keys(chapterReport).map(index => (
						<div key={index}>
							<b>{chapterReport[index].title}</b>: {chapterReport[index].result} chapter ending
						</div>
					)) }
				</div>
			</Panel>
		</div>
    );
};

Epilogue.propTypes = {
    chapterReport: PropTypes.object,
    onReset: PropTypes.func,
    storyEnding: PropTypes.string
};

export default Epilogue;
