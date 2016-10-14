import React, {PropTypes} from 'react';


function Comment(props) {
    const {comment: {text, user}} = props;
    return (
        <div>
            <p>{text}</p>
            <b>by {user}</b>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
};

export default Comment;
