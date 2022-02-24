import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rv9vIyLP6wNtYFr_E15hrfyXlwFPcT3JFh8N58_l1wc'
    }
});