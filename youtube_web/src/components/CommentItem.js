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
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { Button, ListGroupItem, Container, Row, Col } from 'reactstrap';

const VideoItem = ({comment, handleCommentSelect, handleCommentReplies, withReplies}) => {
    let replyButton, authorImage, authorName, commentText, numLikes, numReplies, commentExtract;
    
    if (withReplies) {
        authorImage = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
        authorName = comment.snippet.topLevelComment.snippet.authorDisplayName;
        commentText = comment.snippet.topLevelComment.snippet.textOriginal;
        numLikes = comment.snippet.topLevelComment.snippet.likeCount;
        commentExtract = comment.snippet.topLevelComment.snippet;
        numReplies = <div><p>Number of replies: {comment.snippet.totalReplyCount}</p></div>;
        if (comment.snippet.totalReplyCount !== null && comment.snippet.totalReplyCount>0) {
            replyButton = <div>       
                            <Button className="comment-button" onClick={() => handleCommentReplies(comment)}>See its replies</Button>
                        </div>;
        }
    } else {
        authorImage = comment.snippet.authorProfileImageUrl;
        authorName = comment.snippet.authorDisplayName;
        commentText = comment.snippet.textOriginal;
        numLikes = comment.snippet.likeCount;
        commentExtract = comment.snippet;
    }
    
    return <ListGroupItem>
        <Container>
            <Row>
                <Col xs="12" md="6">    
                    <img src={authorImage} alt={authorName} className="userImage"/>
                    <p className="font-weight-bold">{authorName}</p>                 
                </Col>
                <Col xs="12" md="6">
                    <p>{commentText}</p>
                </Col>
                <Col xs="12">
                    <p>Number of likes: {numLikes}</p>
                    {numReplies}
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                    <Button className="comment-button" onClick={() => handleCommentSelect(commentExtract)}>Add as favorite</Button>
                </Col>
                <Col xs="12" md="6"> 
                    {replyButton}
                </Col>       
            </Row>
        </Container>
    </ListGroupItem>;
}

export default VideoItem;