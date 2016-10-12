import React, { Component } from 'react'

class Article extends Component {

  state = {
    isOpen: false
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isOpen: false
  //   }
  // }

  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { article: { title, text } } = this.props;

    const { isOpen } = this.state;
    const body = isOpen ? <section>{ text }</section> : null;

    return (
      <div>
        <h1 onClick = {this.toggleOpen}>{ title }</h1>
        {body}
      </div>
    )

  }
}

// function Article(props) {
//   const { article: { title, text } } = props;
//   return (
//     <div>
//       <h1>{ title }</h1>
//       <section>{ text }</section>
//     </div>
//   )
// }

export default Article
