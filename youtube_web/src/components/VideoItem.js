/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { ListGroupItem, Container, Row, Col } from 'reactstrap';

const VideoItem = ({video, handleVideoSelect}) => {
    return <ListGroupItem  tag="button" onClick={ () => handleVideoSelect(video)} action>
        <Container>
            <Row>
                <Col xs="12" md="6">        
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="videoImage"/>
                </Col>
                <Col xs="12" md="6">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                    <p className="font-weight-bold">Channel: {video.snippet.channelTitle}</p>
                </Col>
            </Row>
        </Container>
    </ListGroupItem>;
}

export default VideoItem;