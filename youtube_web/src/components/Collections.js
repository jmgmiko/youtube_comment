/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import '../css/App.css';
import AppNavbar from './AppNavbar';
import CollectionDropdown from './CollectionDropdown';
import CollectionItem from './CollectionItem';
import { Container } from 'reactstrap';
import deleteComment from '../apis/delete_comment';
import Searchbar from './Searchbar';
import getAllCollections from '../apis/get_collections';
import deleteCollection from '../apis/delete_collection';
import sortCollectionByName from '../sort/sort_by_collection_name';
import createCollection from '../apis/add_collection'; 

class Collections extends Component {
  constructor(props) {
      super(props);
      this.state = {
            collections: [],
            selectedCollection: null,
            dropdown: false
      }
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
  
  deleteCol = async (collection) => {
      console.log(collection)
      const response = await deleteCollection(collection);
      this.setState({
        selectedCollection: null,
        collections: response.data.sort(sortCollectionByName)
      })
  }
  
  handleCollection = (collection) => {
      this.setState({
          selectedCollection: collection
      })
  }
  
  deleteCom = async (comment, collection) => {
      console.log(comment)
      const response = await deleteComment(comment, collection);
      this.setState({
        selectedCollection: response.data
      })
  }
  
  toggleDropdown = () => {
      const changed = !this.state.dropdown;
      this.setState({
          dropdown: changed
      });
  }
  
  render() {
    let collectionarea;
    
    if (this.state.selectedCollection !== null) {
        collectionarea = <div>
                            <CollectionItem className="collectionItem"
                                            collection={this.state.selectedCollection}
                                            deleteCollect={this.deleteCol}
                                            deleteComment={this.deleteCom}/>
                         </div>;
    } 
    
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Searchbar handleFormSubmit={this.handleAddCollection} searchType="collectionInput"/>
          <CollectionDropdown className="collectionDropdown"
                              dropdownOpen={this.state.dropdown} 
                              collections={this.state.collections} 
                              toggle={this.toggleDropdown}
                              handleCollection={this.handleCollection}/>
          {collectionarea}
        </Container>
      </div>
    );
  }
}

export default Collections;

