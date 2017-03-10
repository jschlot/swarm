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
            <div className="gameview__content">
                <div className="gameview__toaster">{ message }</div>
                <div className="gameview__heading">{ heading ? heading : 'Final Results' }</div>
                { body ? <div className="gameview__body">{ body }</div> : null }
                <div className="gameview__decision">
                    <div className="gameview__question">{ heading ? decision.text : 'here are your choices' }</div>
                    <div className="gameview__choices">
                    { decision.options ? decision.options.map(
                        (obj, index) => (
                            <div className="gameview__pick" key={index} onClick={() => onChoice(decision, obj, currentChapterIdx)}>{obj.text}</div>
                        )
                    ) : null }
                    { result && !decision.options ? (
                        <div className="gameview_end-of-chapter">
                            <div className="gameview__results">you are {result}</div>
                            <div className="gameview__move-ahead" onClick={onNext}>move ahead</div>
                        </div>
                    ) : null }
                    { !heading ? Object.keys(chapterReport).map(
                        index => (
                            <div key={index}><b>{chapterReport[index].title}</b>: {chapterReport[index].result}</div>
                        )
                    ) : null}
                    { !heading ? Object.keys(scorecardReport).map(
                        key => (
                            <div key={key}><b>{key}</b>: {scorecardReport[key]}</div>
                        )
                    ) : null}
                    { !heading ? (
                        <div className="gameview__end-of-game">
                            <div className="gameview__question">the final results are</div>
                            <div className="gameview__results">you are { finalOutcome }</div>
                            <div className="gameview__end-of-game gameview__pick" onClick={onReset}>try again</div>
                        </div>
                    ) : null }
                    </div>
                </div>
            </div>
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
