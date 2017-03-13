import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { gameview } from './styles.scss';

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
        backgroundVideo
    } = props;

    // result
    const resultClass = classNames({
        'gameview__xp--good': result === 'good',
        'gameview__xp--evil': result === 'evil',
        'gameview__xp--lawful': result === 'lawful',
        'gameview__xp--chaotic': result === 'chaotic'
    });

    return (
        <section className="gameview">
            <div className="gameview__underlay">
                <video className="gameview__video-player" id="background-video" loop autoPlay>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <article className="gameview__toaster">
                <Panel timer="0">
                    <div className="gameview__message">{ message }</div>
                   { result ? <div className={resultClass}>{result} points earned</div> : null }
               </Panel>
            </article>

            <article className="gameview__main">
                { heading ? (
                    <div className="gameview__content">
                        <h2 className="gameview__heading">
                            { heading }
                        </h2>
                        <Panel timer="600">
                            { body ? (
                                <div className="gameview__body">
                                    {body}
                                </div>
                            ) : null }
                            { decision.options ? (
                                <div className="gameview__choices">
                                    <div className="gameview__question">{ decision.text }</div>
                                    { decision.options.map((obj, index) => (
                                        <div key={index} className="gameview__pick" onClick={() => onChoice(decision, obj, currentChapterIdx)}>
                                            {obj.text}
                                        </div>
                                    )) }
                                </div>
                            ) : null }
                            { result && !decision.options ? (
                                <div className="gameview___result">
                                    { chapterEnding }
                                </div>
                            ) : null }
                            { !decision.options ? (
                                <div className="gameview__next" onClick={onNext}>
                                    go on...
                                </div>
                            ) : null }
                        </Panel>
                    </div>
                ) : (
                    <div className="gameview__content">
                        <h2 className="gameview__heading">
                            epilogue
                        </h2>
                        <Panel timer="600">
                            <div className="gameview__subheading">
                                { storyEnding }
                            </div>
                            <div className="gameview__next" onClick={onReset}>
                                play again
                            </div>
                            <div className="gameview__results">
                                { Object.keys(chapterReport).map(index => (
                                    <div key={index}>
                                        <b>{chapterReport[index].title}</b>: {chapterReport[index].result} chapter ending
                                    </div>
                                )) }
                            </div>
                        </Panel>
                    </div>
                ) }
            </article>
        </section>
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
    backgroundVideo: PropTypes.string
};

export default Gameview;
