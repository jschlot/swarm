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
                    episodeList.map((obj, index) => {
                        let handleClick = () => {};
                        let css = classNames({
                            'episodes__pick--deactivated': true
                        });
                        let description = obj.description;

                        if (currentEpisode === index) {
                            handleClick = () => onChooseEpisode(obj, index);
                            css = classNames({
                                'episodes__pick': true
                            });
                        }

                        if (index < currentEpisode) {
                            description = 'completed';
                        }

                        return (
                            <div key={index} className={css} onClick={handleClick}>
                                <div className="episodes__number">Episode {index + 1}</div>
                                <div className="episodes__title">{obj.title}</div>
                                <div className="episodes__description">{description}</div>
                            </div>
                        );
                    })
                }
                </div>
                <div className="episodes__back" onClick={ongotoMain}>
                    start over
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
    onChooseEpisode: PropTypes.func.isRequired,
    ongotoMain: PropTypes.func.isRequired
};

export default Episodes;
