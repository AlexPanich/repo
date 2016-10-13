import React, { Component, PropTypes } from 'react';
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

// function CommentList(props) {
//     const { comments } = props;
//     const listItems = comments.map((comment) => <li key = {comment.id}><div>{ comment.text }</div><div>{ comment.user }</div></li>)
//     return (
//         <div>
//             <h3>Комментарии</h3>
//             <ul>
//                 {listItems}
//             </ul>
//         </div>
//     )
// }

class CommentList extends Component {

  // state = {
  //   isOpen: false
  // }

  componentWillMount() {
    console.log('---', this.props);
  }
  componentDidMount() {
    console.log('---', 'mounted')
  }
  componentWillReceiveProps(nextProps) {
    console.log('---', this.props.isOpen, nextProps.isOpen)
  }
  // toggleOpen = (ev) => {
  //   ev.preventDefault();
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   })
  // }
  render() {
    const { comments, isOpen, toggleOpen } = this.props;
    // const {isOpen} = this.state;
    if (!comments || !comments.length) return <h3>no comments yet</h3>
    const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>);
    const body = isOpen ? <ul>{commentItems}</ul> : null;
    const linkText = isOpen ? 'close comments' : 'show  comments';
    return (
      <div>
        <a href="#" onClick = {toggleOpen}>{linkText}</a>
        {body}
      </div>
    )
  }

}

export default toggleOpen(CommentList);
