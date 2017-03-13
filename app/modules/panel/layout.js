import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { panel } from './styles.scss';

const Layout = (props) => {
    const { children, toggle } = props;

    const style = {
        opacity: toggle,
        marginRight: toggle * 100,
        marginLeft: toggle * 100
    };

    const classes = classNames({
        'panel': true,
        'show': toggle
    });

    return (
        <div className={classes} style={style}>
            { children }
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    toggle: PropTypes.number
};

export default Layout;
