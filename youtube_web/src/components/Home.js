/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import '../css/App.css';
import AppNavbar from './AppNavbar';
import Searchbar from './Searchbar';
import { Button, Container } from 'reactstrap';
import searchYoutubeVideos from '../apis/youtube_search';
import searchMoreYoutubeVideos from '../apis/youtube_search_more';
import searchYoutubeComments from '../apis/youtube_comment_list';
import searchMoreYoutubeComments from '../apis/youtube_comment_more';
import VideoList from './VideoList';
import CommentList from './CommentList';
import CollectionModal from './CollectionModal';
import sortCollectionByName from '../sort/sort_by_collection_name';
import createCollection from '../apis/add_collection'; 
import addComment from '../apis/add_comment'; 
import getAllCollections from '../apis/get_collections';

class Home extends Component {  
  constructor(props) {
      super(props);
      this.state = {
            collections: [],
            videos: [],
            comments: [],
            replies: [],
            nextVideoPage: '',
            nextComment: '',
            videoSearch: '',
            commentSearch: '',
            selectedComment: null,
            selectedVideo: null,
            modal: false
      };
  }
  
  componentDidMount() {
      this.setupCollections();
  }
  
  setupCollections = async() => {
    const response = await getAllCollections();
    this.setState({
        collections: response.data.sort(sortCollectionByName),
    })
    console.log(response);
  }
  
  handleAddCollection = async (collectionName) => {
      const response = await createCollection(collectionName);
      console.log(response);
      this.setState({
        collections: response.data.sort(sortCollectionByName)
      })
  }
  
  handleAddComment = async(collection, comment) => {
    const response = await addComment(collection.id, comment);
    this.setState({
        modal: false,
        collections: response.data.sort(sortCollectionByName)
    })
  }
  
  handleSearch = async(termFromSearchBar) => {
      const response = await searchYoutubeVideos(termFromSearchBar);
      console.log(response.data)
      this.setState({
          videoSearch: termFromSearchBar,
          nextVideoPage: response.data.nextPageToken,
          videos: response.data.items
      })
  }
  
  handleCommentSearch = async(termFromSearchBar) => {
      const response = await searchYoutubeComments(termFromSearchBar, this.state.selectedVideo.id.videoId);
      if (response) {
          console.log(response.data)
            this.setState({
                commentSearch: termFromSearchBar,
                nextComment: response.data.nextPageToken,
                comments: response.data.items
            })
      } else {
          this.setState({
            comments: null
         })
      }
  }
  
  getMoreComments = async() => {
      const response = await searchMoreYoutubeComments(this.state.nextComment, this.state.commentSearch, this.state.selectedVideo.id.videoId);
      console.log(response.data)
      this.setState({
          nextComment: response.data.nextPageToken,
          comments: response.data.items,
          replies: []
      })
  }
  
  getMoreVideos = async() => {
      const response = await searchMoreYoutubeVideos(this.state.nextVideoPage, this.state.videoSearch);
      console.log(response.data)
      this.setState({
          nextVideoPage: response.data.nextPageToken,
          videos: response.data.items
      })
  }
  
  handleVideoSelect = (video) => {
    this.setState({
        selectedVideo: video,
        comments: [],
        replies: []
    })
    console.log(video);
  }
  
  handleCommentSelect = async(comment) => {
    this.setState({
        selectedComment: comment,
        modal: true
    })
    console.log(comment);
  }
  
  handleCommentReplies = (comment) => {
    this.setState({
        selectedComment: comment.snippet.topLevelComment.snippet,
        replies: comment.replies.comments
    })
    console.log(comment);
  }
  
  handleModal = () => {
    this.setState({
        modal: false
    })
  }
  
  render() {
    let allvideos, commentSearch, allcomments, allreplies, collectmodal;
    if (this.state.replies.length > 0) {
        allreplies = <div className="replies">
        <hr style={{height: "1px", borderTop: "1px", borderStyle: "solid", borderColor: "black"}}/>
        <CommentList handleCommentSelect={this.handleCommentSelect} 
                    handleCommentReplies={this.handleCommentReplies} 
                    comments={this.state.replies} withReplies={false} 
                    commentAuthor={this.state.selectedComment.authorDisplayName}/>
        </div>;
    }
    
    if (this.state.videoSearch !== ''  && this.state.videos.length === 0) {
        allvideos = <div className="videoListComponent">
        <p>There are no videos found.</p>
        </div>;
    } else if (this.state.videoSearch !== ''  && this.state.videos.length > 0) {
        allvideos = <div className="videoListComponent">
        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} searchTerm={this.state.videoSearch}/>
        <Button onClick={this.getMoreVideos}>Get More Videos</Button>
        </div>;
    } 
    if (this.state.selectedVideo !== null) {
        commentSearch = <div className="commentSearch">
        <hr style={{height: "1px", borderTop: "1px", borderStyle: "solid", borderColor: "black"}}/>
        <h4>Selected video: {this.state.selectedVideo.snippet.title}</h4>
        <Searchbar handleFormSubmit={this.handleCommentSearch} searchType="comment"/>
        </div>;
    }
    if (this.state.selectedVideo && this.state.comments === null) {
        allcomments = <div className="commentListComponent">
            <p>There are no comments in the video.</p>
        </div>;
    } else if (this.state.comments.length > 0) {
        allcomments = <div className="commentListComponent">
        <CommentList handleCommentSelect={this.handleCommentSelect} 
                    handleCommentReplies={this.handleCommentReplies} 
                    comments={this.state.comments} 
                    withReplies={true} 
                    commentAuthor=""/>
        <Button onClick={this.getMoreComments}>Get More Comments</Button>
        </div>;
    }
    if (this.state.selectedComment !== null) {
        collectmodal = <div>
                        <CollectionModal className="collectionModal"
                        modalOpen={this.state.modal} 
                        toggle={this.handleModal} 
                        mainList={this.state.collections}
                        modalInput={this.handleAddCollection}
                        comment={this.state.selectedComment}
                        handleAddComment={this.handleAddComment}/></div>;
    }
    
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Searchbar handleFormSubmit={this.handleSearch} searchType="video"/>
          {allvideos}
          {commentSearch}
          {allcomments}
          {allreplies}
          {collectmodal}
        </Container>
      </div>
    );
  }
}

export default Home;

