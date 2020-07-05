/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';

export default function getAllCollections() {
      const response = axios.get('http://localhost:8080/collection/all').catch((error) => {
          console.log(error)
      })
      return response;
}

