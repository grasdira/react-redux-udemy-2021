import axios from 'axios';

const KEY = 'AIzaSyAwt6cz6jWDi0D2QZcBn9n-u730EGjbiY4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
    
});
