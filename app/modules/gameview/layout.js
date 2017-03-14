import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { gameview } from './styles.scss';

import Epilogue from './components/epilogue';
import Chapter from './components/chapter';

import Panel from '../panel/container';

const Gameview = (props) => {
    const {
        message,
        heading,
        body,
        decision,
        currentChapterIdx,
        finalOutcome,
        result,
        chapterReport,
        scorecardReport,
        chapterEnding,
        onChoice,
        onNext,
        onReset,
        storyEnding,
        backgroundVideo,
        storyMode
    } = props;

    // result
    const resultClass = classNames({
        'gameview__xp--good': result === 'good',
        'gameview__xp--evil': result === 'evil',
        'gameview__xp--lawful': result === 'lawful',
        'gameview__xp--chaotic': result === 'chaotic'
    });

    return (
        <div className="gameview">
            <div className="gameview__underlay">
                <video className="gameview__video-player" id="background-video" loop autoPlay>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>

            <div className="gameview__toaster">
                <Panel timer="200">
                    <div className="gameview__message">{ message }</div>
                   { result ? <div className={resultClass}>{result} points earned</div> : null }
               </Panel>
            </div>

            <div className="gameview__main">
                { storyMode === 'chapter' ? <Chapter {...props} /> : <Epilogue {...props} /> }
            </div>
        </div>
    );
};

Gameview.propTypes = {
    message: PropTypes.string,
    heading: PropTypes.string,
    body: PropTypes.string,
    finalOutcome: PropTypes.string,
    decision: PropTypes.object,
    currentChapterIdx: PropTypes.number,
    result: PropTypes.string,
    chapterReport: PropTypes.object,
    scorecardReport: PropTypes.object,
    onChoice: PropTypes.func,
    onNext: PropTypes.func,
    onReset: PropTypes.func,
    chapterEnding: PropTypes.string,
    storyEnding: PropTypes.string,
    backgroundVideo: PropTypes.string,
    storyMode: PropTypes.string
};

export default Gameview;
