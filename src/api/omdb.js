import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=4e697a41&'
});