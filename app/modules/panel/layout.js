import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { panel } from './styles.scss';

const Layout = (props) => {
    const { children } = props;
    return (
			<div className="panel">
				{ children }
			</div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
