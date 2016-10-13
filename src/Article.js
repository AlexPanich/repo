import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

  state = {
    isOpen: false,
    textButton: 'Показать',
    isCommentOpen: false
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

  toggleComments = (ev) => {
    ev.preventDefault();
    let text = '';
    switch (this.state.textButton) {
      case 'Показать':
            text = 'Скрыть';
            break;
      case 'Скрыть':
            text = 'Показать';
            break;
    }
    this.setState({
      isCommentOpen: !this.state.isCommentOpen,
      textButton: text
    })
  }

  render() {
    const { article: { title, text, comments } } = this.props;
    const { isOpen, textButton, isCommentOpen } = this.state;
    const comment = isCommentOpen ? <CommentList comments = {comments}></CommentList> : null;
    const body = isOpen ? (
        <section>
          <div>{ text }</div>
          <a href="#" onClick = {this.toggleComments}>{textButton} комментарий</a>
          {comment}
        </section>
    ) : null;

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
