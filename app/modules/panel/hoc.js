import React, { PropTypes, Component } from 'react';

import Layout from './layout';

class Panel extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.canClose !== nextProps.canClose && nextProps.canClose) {
            this.interval = setTimeout(this.handleTick.bind(this), 5000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    handleTick() {
        if (this.props.canClose) {
            this.props.onClose();
        }
        clearTimeout(this.interval);
    }

    render() {
        const { children, ...props } = this.props;
        return (
            <Layout {...props}>
                { children }
            </Layout>
        );
    }
}

Panel.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    canClose: PropTypes.bool
};

export default Panel;
