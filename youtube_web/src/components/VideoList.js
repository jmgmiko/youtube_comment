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
import VideoItem from './VideoItem';

const VideoList = ({videos, handleVideoSelect, searchTerm}) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.etag} video={video} handleVideoSelect={handleVideoSelect} />
    })
    
    return <div className="videolist">
            <h4>Your search results with the given terms: {searchTerm} (Select any video)</h4>
            <ListGroup>{renderedVideos}</ListGroup>
           </div>;
}

export default VideoList;