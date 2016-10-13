import React from 'react'

function CommentList(props) {
    const { comments } = props;
    const listItems = comments.map((comment) => <li key = {comment.id}><div>{ comment.text }</div><div>{ comment.user }</div></li>)
    return (
        <div>
            <h3>Комментарии</h3>
            <ul>
                {listItems}
            </ul> 
        </div>        
    )
}

export default CommentList;