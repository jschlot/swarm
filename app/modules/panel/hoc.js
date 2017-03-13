import React, { PropTypes, Component } from 'react';

import Layout from './layout';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.handleTick.bind(this), this.props.timer);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            toggle: 0
        });
        this.interval = setTimeout(this.handleTick.bind(this), this.props.timer);
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    handleTick() {
        clearTimeout(this.interval);
        this.setState({
            toggle: 1
        });
    }

    render() {
        const { children, ...props } = this.props;
        const { toggle } = this.state;
        return (
            <Layout {...props} toggle={toggle}>
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
