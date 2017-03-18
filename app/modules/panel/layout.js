import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { panel } from './styles.scss';

const Layout = (props) => {
    const {
        children,
        toggle,
        position
    } = props;

    const style = {
        opacity: toggle,
        marginRight: (position !== 'right') ? 0 : toggle * 100,
        marginLeft: (position === 'right') ? 0 : toggle * 100
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
    toggle: PropTypes.number,
    position: PropTypes.string
};

export default Layout;
