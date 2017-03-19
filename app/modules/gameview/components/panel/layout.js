import React, { PropTypes } from 'react';

import { panel } from './styles.scss';

const Layout = (props) => {
    const {
        children,
        toggle,
        position = 'left'
    } = props;

    const style = {
        opacity: toggle,
        [position]: (toggle * 100) - 100
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
