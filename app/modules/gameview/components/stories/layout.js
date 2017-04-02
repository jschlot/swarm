import React, { PropTypes } from 'react';

import { stories } from './styles.scss';
import Panel from '../panel';
import { pluralizer, countOf } from '../../formatters';

const Stories = (props) => {
    const {
		storyList,
        name,
        subtitle,
        author,
		onChooseStory
    } = props;

    return (
		<div className="stories">
			<Panel timer="600">
				<h2 className="stories__heading">
					{ name }
				</h2>
			</Panel>
			<Panel timer="1200">
				<div className="stories__body">
                    <p>{ subtitle }</p>
                    <br />
                    <p>By { author }</p>
				</div>
				<div className="stories__list">{
                    Object.keys(storyList).map((id, index) => {
                        const { title, description } = storyList[id].meta;
                        const count = countOf(storyList[id].episodes);
                        let clickHandler = () => {};
                        if (count > 0) {
                            clickHandler = () => onChooseStory(id);
                        }
                        return (
                            <div key={index} className="stories__pick" onClick={clickHandler}>
                                <div className="stories__title">
									{ title }
								</div>
                                <div className="stories__description">
									{ description }
								</div>
								<div className="stories__description">{ pluralizer(count, 'episode') }</div>
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
    name: PropTypes.string,
    subtitle: PropTypes.string,
    author: PropTypes.string,
    onChooseStory: PropTypes.func
};

export default Stories;
