import Axios from 'axios'

const HTTPClient = Axios.create({
  baseURL: 'https://challenge-fielo.herokuapp.com/',
  timeout: 30000,
  headers: {
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hhbGxlbmdlIEV1cmVrYSIsImRlc2NyaXB0aW9uIjoiRGVzYWZpbyBkZSBmcm9udC1lbmQiLCJjb21wYW55IjoiRmllbG8iLCJpYXQiOjE2NTc2NzM2MjksImV4cCI6MTY1NzY3NzIyOX0.8p3U_iz_W4sR47XPj3ICqt1e7vd_RIeVKPD42cGXkE4'
  }
});

export default HTTPClient;
