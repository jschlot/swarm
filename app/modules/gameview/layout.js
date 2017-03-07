import React, { PropTypes } from 'react';
import { gameview } from './styles.scss';

const Gameview = (props) => {
    const {
        message,
        heading,
        body,
        decision,
        currentChapterIdx,
        result,
        chapterReport,
        scorecardReport,
        onChoice,
        onNext
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
                            <div className="gameview__results">you are a {result}</div>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

Gameview.propTypes = {
    message: React.PropTypes.string,
    heading: React.PropTypes.string,
    body: React.PropTypes.string,
    decision: React.PropTypes.object,
    currentChapterIdx: React.PropTypes.number,
    result: React.PropTypes.string,
    chapterReport: React.PropTypes.object,
    scorecardReport: React.PropTypes.object,
    onChoice: React.PropTypes.func,
    onNext: React.PropTypes.func
};

export default Gameview;
