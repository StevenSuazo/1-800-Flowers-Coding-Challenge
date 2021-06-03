import axios from 'axios';

// make API get req from express server
export function requestGetPost() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/posts"
  });
}

