import React, { PropTypes, Component } from 'react';

import Layout from './layout';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 1
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            opacity: 0
        });
        this.interval = setTimeout(this.handleTick.bind(this), 500);
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    handleTick() {
        this.setState({
            opacity: 1
        });
        clearTimeout(this.interval);
    }

    render() {
        const { children, ...props } = this.props;
        const { opacity } = this.state;
        return (
            <Layout {...props} opacity={opacity}>
                { children }
            </Layout>
        );
    }
}

Panel.propTypes = {
    children: PropTypes.node.isRequired
};

export default Panel;
