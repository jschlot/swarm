import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { gameview } from './styles.scss';

import Epilogue from './components/epilogue';
import Chapter from './components/chapter';

import Panel from '../panel/hoc';

const Gameview = (props) => {
    const {
        message,
        result,
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
                <Panel timer="200" position="right" isTemporary>
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
    result: PropTypes.string,
    backgroundVideo: PropTypes.string,
    storyMode: PropTypes.string
};

export default Gameview;
