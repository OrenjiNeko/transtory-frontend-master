import axios from "axios";
import useAuth from "../auth/useAuth";

const BASE_URL = "https://transtory-backend.herokuapp.com/api/";

export default axios.create( {
  baseURL : BASE_URL
  // headers : {Authorization : "Bearer" + token} 
})

export const axiosPrivate =  axios.create({
  baseURL : BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})