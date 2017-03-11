import React, { PropTypes } from 'react';
import { gameview } from './styles.scss';

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
        onChoice,
        onNext,
        onReset
    } = props;

    return (
        <section className="gameview">
            <article className="gameview__toaster">
                { message }
            </article>

            <article className="gameview__main">
                { heading ? (
                    <div className="gameview__content">
                        <h2 className="gameview__heading">
                            { heading }
                        </h2>
                        { body ? (
                            <div className="gameview__body">
                                {body}
                            </div>
                        ) : null }
                        { decision.options ? (
                            <div className="gameview__choices">
                                { decision.options.map((obj, index) => (
                                    <div key={index} className="gameview__pick" onClick={() => onChoice(decision, obj, currentChapterIdx)}>
                                        {obj.text}
                                    </div>
                                )) }
                            </div>
                        ) : null }
                        { result && !decision.options ? (
                            <div className="gameview__results">
                                {result} chapter ending
                            </div>
                        ) : null }
                    </div>
                ) : (
                    <div className="gameview__content">
                        <h2 className="gameview__heading">
                            final results
                        </h2>
                        <div className="gameview__body">
                            recap
                        </div>
                        <div className="gameview__choices">
                            { Object.keys(chapterReport).map(index => (
                                <div key={index}>
                                    <b>{chapterReport[index].title}</b>: {chapterReport[index].result}
                                </div>
                            )) }
                        </div>
                        <div className="gameview__choices">
                            { Object.keys(scorecardReport).map(key => (
                                <div key={key}>
                                    <b>{key}</b>: {scorecardReport[key]}
                                </div>
                            )) }
                        </div>
                        <div className="gameview__results">
                            { finalOutcome } story ending
                        </div>
                    </div>
                ) }
            </article>

            <article className="gameview__navigation">
                { heading ? (
                    <div className="gameview__footer">
                        { !decision.options ? (
                            <div className="gameview__next" onClick={onNext}>
                                next
                            </div>
                        ) : null }
                    </div>
                ) : (
                    <div className="gameview__footer">
                        <div className="gameview__next" onClick={onReset}>
                            try again
                        </div>
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
    onReset: PropTypes.func
};

export default Gameview;
