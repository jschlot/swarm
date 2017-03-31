import React, { PropTypes } from 'react';

import { chapter } from './styles.scss';

import Panel from '../panel';

const Chapter = (props) => {
    const {
        chapterObj,
        outcome,
        episodeIdx,
        onChoice,
        onGoToEpisodeList
    } = props;

    return (
        <div className="chapter">
            <Panel timer="600">
                <h2 className="chapter__heading">
                    {chapterObj.title}
                </h2>
            </Panel>
            <Panel timer="1200">
                <div className="chapter__body">
                    {chapterObj.body[outcome] ? chapterObj.body[outcome] : chapterObj.body.default}
                </div>
                <div className="chapter__question">
                    {chapterObj.options && chapterObj.options.map((obj, index) => (
                        <div key={index} className="chapter__pick" onClick={() => onChoice(chapterObj.id, episodeIdx, obj)}>
                            {obj.text}
                        </div>
                    ))}
                    {!chapterObj.options ? (
                        <div className="chapter__pick" onClick={onGoToEpisodeList}>
                            continue
                        </div>
                    ) : null }
                </div>
            </Panel>
        </div>
    );
};

Chapter.propTypes = {
    chapterObj: PropTypes.object.isRequired,
    outcome: PropTypes.string,
    episodeIdx: PropTypes.number,
    onChoice: PropTypes.func.isRequired,
    onGoToEpisodeList: PropTypes.func.isRequired
};

export default Chapter;
