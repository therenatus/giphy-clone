import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
});

export const getCatrgoriesApi = () => {
    return instance.get(`categories?api_key=${process.env.REACT_APP_API_KEY}`)
};

export const getTrandingApi = (limit) => {
    return instance.get(`trending?api_key=${process.env.REACT_APP_API_KEY}&${limit && `limit=${limit}`}`)
};

export const getGifsApi = (query) => {
    return instance.get(`search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}`)
}