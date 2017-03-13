import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { panel } from './styles.scss';

const Layout = (props) => {
    const { children, opacity } = props;

    const style = {
        opacity,
        marginRight: opacity * 100,
        marginLeft: opacity * 100
    };

    const classes = classNames({
        'panel': true,
        'show': opacity
    });


    return (
        <div className={classes} style={style}>
            { children }
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    opacity: PropTypes.number
};

export default Layout;
