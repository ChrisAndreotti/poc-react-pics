import axios from 'axios';

const apiSecretKey = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_UNSPLASH_SECRET_ACCESS_KEY : process.env.REACT_APP_DEV_UNSPLASH_SECRET_ACCESS_KEY;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${apiSecretKey}`
    }
});