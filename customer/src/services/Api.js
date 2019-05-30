// this file is used to set up connectors to hit the back end.

import axios from 'axios';

export default function(){
    // asking for axios object of the base URL is pointing to the port of our server
    return axios.create({
        baseURL: 'http://localhost:8081/'
    })
}