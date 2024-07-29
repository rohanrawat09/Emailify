import axios from "axios";
import { FETCH_USER } from "./types";

const fectUser = () =>{
  axios.get('/api/current_user');
}