/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';
import getAllCollections from './get_collections';

export default function addComment(collection, comment) {
      return axios.post('http://localhost:8080/collection/'+collection+'/comment/create', {
          creator: comment.authorDisplayName,
          content: comment.textOriginal
      }).then((response) => {
          console.log(response);
          console.log(response);
          return getAllCollections();
      }).catch((error) => {
          console.log(error);
      })
}

