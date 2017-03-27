import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
                        return (
                            <div key={index} className="stories__pick" onClick={() => onChooseStory(id)}>
                                <div className="stories__title">
									{ storyList[id].meta.title }
								</div>
                                <div className="stories__description">
									{ storyList[id].meta.description }
								</div>
								<div className="stories__description">
									{ storyList[id].episodes.length }
									&nbsp;
									{ storyList[id].episodes.length === 1 ? 'episode' : 'episodes' }
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
    storyList: PropTypes.object.isRequired,
    onChooseStory: PropTypes.func.isRequired
};

export default Stories;
