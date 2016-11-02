import React, {Component, PropTypes} from 'react';
import Comment from './Comment';
import toggleOpen from './../decorators/toggleOpen';
import { connect } from 'react-redux'

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

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.isOpen != this.props.isOpen;
    }

    render() {
        const {commentObjects, isOpen, toggleOpen} = this.props;
        if (!commentObjects || !commentObjects.length) return <h3>no comments yet</h3>
        const commentItems = commentObjects.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        const body = isOpen ? <ul>{commentItems}</ul> : null;
        const linkText = isOpen ? 'close comments' : 'show  comments';
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {body}
            </div>
        )
    }
}

export default connect((state, { comments } ) => {
    return {
        commentObjects: comments.map(id => state.comments.get(id))
    }
})(toggleOpen(CommentList));
