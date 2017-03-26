import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { chapter } from './styles.scss';

import Panel from '../panel';

const Chapter = (props) => {
    const {
        chapterObj,
        outCome,
        onChoice
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
                    {chapterObj.body[outCome] ? chapterObj.body[outCome] : chapterObj.body.default}
                </div>
                <div className="chapter__question">
                    {chapterObj.options.map((obj, index) => (
                        <div key={index} className="chapter__pick" onClick={() => onChoice(chapterObj.id, obj)}>
                            {obj.text}
                        </div>
                    ))}
                </div>
            </Panel>
        </div>
    );
};

Chapter.propTypes = {
    chapterObj: PropTypes.object.isRequired,
    outCome: PropTypes.string,
    onChoice: PropTypes.func.isRequired
};

export default Chapter;
