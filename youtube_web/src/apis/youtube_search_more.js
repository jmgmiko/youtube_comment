/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';
const KEY = "AIzaSyBNIkHR6ZABCmMBmqiRRHnpbghk0yxJAlg";

export default function searchMoreYoutubeVideos(token, term) {
      const response = axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
              part: 'snippet',
              type: 'video',
              maxResults: 5,
              key: KEY,
              q: term,
              pageToken: token
          }
      }).catch((error) => {
          console.log(error)
      })
      return response;
}

