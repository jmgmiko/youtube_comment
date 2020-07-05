/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { ListGroup } from 'reactstrap';
import CommentItem from './CommentItem';

const CommentList = ({comments, handleCommentSelect, handleCommentReplies, withReplies, commentAuthor}) => {
    const renderedComments = comments.map((comment) => {
        return <CommentItem key={comment.id} 
                            comment={comment} 
                            handleCommentSelect={handleCommentSelect} 
                            handleCommentReplies={handleCommentReplies} 
                            withReplies={withReplies}/>
    })
    
    const listLabel = (withReplies) ? <div><h4>Comments:</h4></div> : <div><h4>Replies of {commentAuthor}'s comment:</h4></div>
    return <div className="commentList">{listLabel}<ListGroup>{renderedComments}</ListGroup></div>;
}

export default CommentList;