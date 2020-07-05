/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';

export default function getCollectionById(given) {
      const response = axios.get('http://localhost:8080/collection?id='+given).catch((error) => {
          console.log(error)
      })
      return response;
}

