import axios from 'axios';

export function requestGetPost() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/posts"
  });
}

