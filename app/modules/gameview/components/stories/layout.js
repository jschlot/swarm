import React, { PropTypes } from 'react';

import { stories } from './styles.scss';

import Panel from '../panel';

const Stories = (props) => {
    const {
		storyList,
		onChooseStory
    } = props;


    return (
		<div className="stories">
			<Panel timer="600">
				<h2 className="stories__heading">
					swarm
				</h2>
			</Panel>
			<Panel timer="1200">
				<div className="stories__body">
					here's a list of the available stories...
				</div>
				<div className="stories__list">{
                    Object.keys(storyList).map((id, index) => {
                        const { title, description } = storyList[id].meta;
                        const count = storyList[id].episodes.length;
                        return (
                            <div key={index} className="stories__pick" onClick={() => onChooseStory(id)}>
                                <div className="stories__title">
									{ title }
								</div>
                                <div className="stories__description">
									{ description }
								</div>
								<div className="stories__description">
									{ count === 1 ? `${count} episode` : `${count} episodes` }
								</div>
                            </div>
						);
                    })
				}</div>
			</Panel>
		</div>
    );
};

Stories.propTypes = {
    storyList: PropTypes.object,
    onChooseStory: PropTypes.func
};

export default Stories;
