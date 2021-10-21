import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const sendSignup = (signupData) => {
    // console.log("Sending the data...");
    return API.post("/audit/user", signupData);
}