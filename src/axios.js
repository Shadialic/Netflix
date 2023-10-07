import axios from 'axios'
//axios is an npm module
import {baseUrl} from './constants/constants'

const instance = axios.create({
    baseURL: baseUrl ,
  });

  export default instance;