import React, { PropTypes } from 'react';
import { episodes } from './styles.scss';

import Panel from '../panel';

const Episodes = (props) => {
    const {
        episodeList,
				storyTitle,
				storyDescription,
				onChooseEpisode
    } = props;

    return (
        <div className="episodes">
            <Panel timer="600">
				<h2 className="episodes__heading">
					{ storyTitle }
				</h2>
			</Panel>
			<Panel timer="1200">
				<div className="episodes__body">
					{ storyDescription }
				</div>
				<div className="episodes__list">
					{episodeList.map((obj, index) => (
						<div key={index} className="episodes__pick" onClick={() => onChooseEpisode(obj, index)}>
							<div className="episodes__title">Episode {index + 1}: {obj.title}</div>
							<div className="episodes__description">{obj.description}</div>
						</div>
					))}
				</div>
			</Panel>
        </div>
    );
};

Episodes.propTypes = {
    episodeList: PropTypes.array,
    storyTitle: PropTypes.string,
    storyDescription: PropTypes.string,
    onChooseEpisode: PropTypes.func
};

export default Episodes;
