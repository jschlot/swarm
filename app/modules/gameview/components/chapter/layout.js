import React, { PropTypes } from 'react';

import { chapter } from './styles.scss';

import Panel from '../panel';

const Chapter = (props) => {
    const {
        chapterId,
        title,
        body,
        options,
        episodeIdx,
        onChoice,
        onGoToEpisodeList
    } = props;

    return (
        <div className="chapter">
            <Panel timer="600">
                <h2 className="chapter__heading">
                    { title }
                </h2>
            </Panel>
            <Panel timer="1200">
                <div className="chapter__body">
                    { body }
                </div>
                <div className="chapter__question">
                    {options && options.map((option, index) => {
                        return (
                            <div key={index}
                                 className="chapter__pick"
                                 onClick={() => onChoice(chapterId, episodeIdx, option)}>
                                {option.text}
                            </div>
                        );
                    })}
                    {!options ? (
                        <div className="chapter__pick"
                             onClick={onGoToEpisodeList}>
                            continue
                        </div>
                    ) : null }
                </div>
            </Panel>
        </div>
    );
};

Chapter.propTypes = {
    chapterId: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.array,
    options: PropTypes.array,
    episodeIdx: PropTypes.number,
    onChoice: PropTypes.func,
    onGoToEpisodeList: PropTypes.func
};

export default Chapter;
