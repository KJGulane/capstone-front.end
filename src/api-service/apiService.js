import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://pabilify-front.vercel.app'
});

export default apiService;