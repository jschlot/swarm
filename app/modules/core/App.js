import React, { PropTypes } from 'react';

import { reset } from './components/reset.scss';

const App = ({ children }) =>
    <div className="swarm">
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
