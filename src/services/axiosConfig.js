import axios from "axios";
import {config} from "../config"

const defaultRequest = axios.create({
    baseURL: config.API_URL
})

const requests ={defaultRequest};
export default  requests