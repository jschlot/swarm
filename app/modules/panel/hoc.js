import React, { PropTypes, Component } from 'react';

import Layout from './layout';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.handleTick.bind(this), this.props.timer);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            opacity: 0
        });
        this.interval = setTimeout(this.handleTick.bind(this), this.props.timer);
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    handleTick() {
        clearTimeout(this.interval);
        this.setState({
            opacity: 1
        });
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
    children: PropTypes.node.isRequired,
    timer: PropTypes.string.isRequired
};

export default Panel;
