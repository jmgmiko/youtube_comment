/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';
import getCollectionById from './get_collection_by_id';

export default function deleteComment(comment, collect) {
      return axios.delete('http://localhost:8080/comment/'+comment+'/delete').then((response) => {
          console.log(response);
          return getCollectionById(collect);
      }).catch((error) => {
          console.log(error);
      })
}

