import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { episodes } from './styles.scss';

import Panel from '../panel';

const Episodes = (props) => {
    const {
        episodeList,
        currentEpisode,
		storyTitle,
		storyDescription,
		onChooseEpisode,
        ongotoMain
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
				<div className="episodes__list">{
                    episodeList.map((episode, index) => {

                        const css = classNames({
                            'episodes__pick': true,
                            'episodes__pick--completed': (index < currentEpisode)
                        });

                        let handleClick = () => {};
                        if (currentEpisode === index) {
                            handleClick = () => onChooseEpisode(episode, index);
                        }

                        const description = (index < currentEpisode) ? 'episode completed' : episode.description;

                        return (
                            <div key={index} className={css} onClick={handleClick}>
                                <div className="episodes__number">Episode {index + 1}</div>
                                <div className="episodes__title">{episode.title}</div>
                                <div className="episodes__description">{description}</div>
                            </div>
                        );
                    })
                }
                </div>
                <div className="episodes__back" onClick={ongotoMain}>
                    back to the list of stories
                </div>
			</Panel>
        </div>
    );
};

Episodes.propTypes = {
    episodeList: PropTypes.array,
    currentEpisode: PropTypes.number,
    storyTitle: PropTypes.string,
    storyDescription: PropTypes.array,
    onChooseEpisode: PropTypes.func,
    ongotoMain: PropTypes.func
};

export default Episodes;
