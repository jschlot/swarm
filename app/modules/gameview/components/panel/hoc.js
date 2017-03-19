import React, { PropTypes, Component } from 'react';

import Layout from './layout';

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: 0,
            displayedChild: null
        };
    }

    componentDidMount() {
        this.interval = setTimeout(this.handleTick.bind(this), this.props.timer);
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
        this.setState({displayedChild: this.props.children});
    }

    render() {
        const { children, ...props } = this.props;
        const { toggle, displayedChild } = this.state;

        return (
            <Layout {...props} toggle={toggle}>
                { displayedChild }
            </Layout>
        );
    }
}

Panel.propTypes = {
    children: PropTypes.node.isRequired,
    timer: PropTypes.string.isRequired
};

export default Panel;
