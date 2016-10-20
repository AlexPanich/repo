import React from 'react';

export default (Component) => class DecoratorOneOpen extends React.Component {
    state = {
        openId: null
    };
    open = id => ev => {
        if (ev) ev.preventDefault();
        this.setState({
            openId: id == this.state.openId ? null : id
        });
    };

    render() {
        return <Component {...this.props}
            openArticleId={this.state.openId}
            openArticle={this.open}
        />
    }
}