/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import axios from 'axios';
const KEY = "AIzaSyBhXrON3kc5gSBlCnd9szI9JsiHrIO1ZXs";

export default function searchYoutubeComments(term, video) {
      const response = axios.get('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&part=replies', {
          params: {
              maxResults: 10,
              order: 'relevance',
              key: KEY,
              searchTerms: term,
              videoId: video
          }
      }).catch((error) => {
          console.log(error)
      })
      return response;
}

