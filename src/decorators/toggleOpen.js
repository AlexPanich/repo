import React, { Component } from 'react';

export default (Component) => class DecoratedComponent extends Component {
  state = {
    isOpen: false
  }
  render() {
    console.log('inner')
    return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
  }
  toggleOpen = (ev) => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
