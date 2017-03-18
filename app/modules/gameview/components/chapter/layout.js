import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { chapter } from './styles.scss';

import Panel from '../panel/hoc';

const Chapter = (props) => {
    const {
        currentChapterIdx,
        heading,
        body,
        decision,
        chapterEnding,
        onChoice,
        onNext
    } = props;

    return (
			<div className="chapter">
					<h2 className="chapter__heading">
							{ heading }
					</h2>
					<Panel timer="600">
							{ body ? (
									<div className="chapter__body">
											{body}
									</div>
							) : null }

							{ decision.options ? (
								<div className="chapter__choices">
										<div className="chapter__question">{ decision.text }</div>
										{ decision.options.map((obj, index) => (
												<div key={index} className="chapter__pick" onClick={() => onChoice(decision, obj, currentChapterIdx)}>
														{obj.text}
												</div>
										)) }
								</div>
							) : (
								<div>
									<div className="chapter___result">
											{ chapterEnding }
									</div>
									<div className="chapter__next" onClick={onNext}>
											go on...
									</div>
								</div>
							) }
					</Panel>
			</div>
    );
};

Chapter.propTypes = {
    currentChapterIdx: PropTypes.number,
    heading: PropTypes.string,
    body: PropTypes.array,
    decision: PropTypes.object,
    chapterEnding: PropTypes.string,
    onChoice: PropTypes.func,
    onNext: PropTypes.func
};

export default Chapter;
