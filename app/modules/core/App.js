import React, { PropTypes } from 'react';
import Navigation from '../navigation/container';

import { reset } from './components/reset.scss';

const App = ({ children }) =>
    <div>
        <Navigation/>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
