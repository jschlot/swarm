import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Panel from '../../panel/container';

const Chapter = (props) => {
    const {
        heading,
        body,
        decision,
        currentChapterIdx,
        result,
        chapterEnding,
        onChoice,
        onNext
    } = props;

    return (
			<div className="gameview__content">
					<h2 className="gameview__heading">
							{ heading }
					</h2>
					<Panel timer="600">
							{ body ? (
									<div className="gameview__body">
											{body}
									</div>
							) : null }

							{ decision.options ? (
								<div className="gameview__choices">
										<div className="gameview__question">{ decision.text }</div>
										{ decision.options.map((obj, index) => (
												<div key={index} className="gameview__pick" onClick={() => onChoice(decision, obj, currentChapterIdx)}>
														{obj.text}
												</div>
										)) }
								</div>
							) : (
								<div>
									<div className="gameview___result">
											{ chapterEnding }
									</div>
									<div className="gameview__next" onClick={onNext}>
											go on...
									</div>
								</div>
							) }
					</Panel>
			</div>
    );
};

Chapter.propTypes = {
    heading: PropTypes.string,
    body: PropTypes.array,
    decision: PropTypes.object,
    currentChapterIdx: PropTypes.number,
    result: PropTypes.string,
    chapterEnding: PropTypes.string,
    onChoice: PropTypes.func,
    onNext: PropTypes.func
};

export default Chapter;
