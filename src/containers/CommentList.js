import React, {Component, PropTypes} from 'react';
import NewCommentForm from '../components/NewCommentForm'
import Comment from '../components/Comment';
import toggleOpen from './../decorators/toggleOpen';
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'

class CommentList extends Component {

    componentWillMount() {
        console.log('---', this.props);
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', this.props.isOpen, nextProps.isOpen)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   return nextProps.isOpen != this.props.isOpen;
    // }

    getBody() {
        const { isOpen, article, commentObjects, addComment } = this.props;
        if (!isOpen) return null;
        const commentItems = commentObjects.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        return (
            <div>
                <ul>{commentItems}</ul>
                <NewCommentForm articleId={article.id} addComment={addComment}/>
            </div>
        )
    }

    render() {
        const {commentObjects, isOpen, toggleOpen} = this.props;
        if (!commentObjects || !commentObjects.length) return <h3>no comments yet</h3>
        const linkText = isOpen ? 'close comments' : 'show  comments';
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }
}

export default connect((state, { comments } ) => {
    return {
        commentObjects: comments.map(id => state.comments.get(id))
    }
}, {addComment})(toggleOpen(CommentList));
