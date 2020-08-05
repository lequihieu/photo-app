import axios from 'axios';

const fetchImageService = (key, page) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.unsplash.com/search/photos?query=${key}&client_id=_wFlGHg8spP6UKqnZwPDZ_jFUZ867d6cql3tLaDPf5Y&per_page=32&page=${page}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
}       
export default fetchImageService;