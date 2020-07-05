/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: ''
    };
  }

  handleChange = (event) => {
    this.setState({
        term: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  }

  render() {
      let searchLabel, searchInput;
      
      if (this.props.searchType === "video") {
          searchLabel = <Label for="video-search" sm={4}>Video Search</Label>;
          searchInput = <Input type="text" name="video-search" onChange={this.handleChange} value={this.state.term} placeholder="Search a channel or video" />
      } else if (this.props.searchType === "comment") {
          searchLabel = <Label for="comment-search" sm={4}>Comment Search</Label>;
          searchInput = <Input type="text" name="comment-search" onChange={this.handleChange} value={this.state.term} placeholder="Search a comment" />
      } else if (this.props.searchType === "collection") {
          searchLabel = <Label for="collection-search" sm={4}>Collection Search</Label>;
          searchInput = <Input type="text" name="collection-search" onChange={this.handleChange} value={this.state.term} placeholder="Search a collection" />
      } else if (this.props.searchType === "collectionInput") {
          searchLabel = <Label for="collection-search" sm={4}>Add a new collection</Label>;
          searchInput = <Input type="text" name="collection-search" onChange={this.handleChange} value={this.state.term} placeholder="Enter a new collection name" />
      }   
          
      return <div className="search-bar ui segment" style={{marginTop: "10px"}}>
                <Form onSubmit={this.handleSubmit} className="ui-form">
                    <FormGroup className="field" row>
                      {searchLabel}
                      <Col sm={8}>
                        {searchInput}
                      </Col>
                    </FormGroup>
                </Form>
            </div>;
  }
}

