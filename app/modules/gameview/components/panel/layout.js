import React, { PropTypes } from 'react';

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

    return (
        <div className="panel" style={style}>
            { children }
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    toggle: PropTypes.number,
    position: PropTypes.string
};

export default Layout;
