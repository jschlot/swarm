import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { gameview } from './styles.scss';

import Toaster from './components/toaster';
import Epilogue from './components/epilogue';
import Chapter from './components/chapter';

import Panel from './components/panel';

const Gameview = (props) => {
    const {
        backgroundVideo,
        storyMode
    } = props;

    return (
        <div className="gameview">
            <div className="gameview__underlay">
                <video className="gameview__video-player" id="background-video" loop autoPlay>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <Toaster />
            <div className="gameview__pages">
                { storyMode === 'chapter' ? <Chapter /> : <Epilogue /> }
            </div>
        </div>
    );
};

Gameview.propTypes = {
    backgroundVideo: PropTypes.string,
    storyMode: PropTypes.string
};

export default Gameview;
