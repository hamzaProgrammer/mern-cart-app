const axios = require('axios');

const API = axios.create({
    baseURL: 'http://localhost:5000'
});

// this is for using local storage in headers, otherwise it will not work
/* API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }

    return req;

}); */


const stripePayment = (data) => API.post(`/payment`,data );

// Products Requests
const getAllProducts = (cat) => API.get(`/products/${cat ? `category=${cat}` : ''}`);
const getMyProduct = (id) => API.get(`/products/getSingleProduct/${id}`);


// users
const loginFunc = (data) => API.post(`/signin`);


// Admin Requests
const fetchNewUsers = (data) => API.post(`/users/`);



module.exports = {
    stripePayment,
    getAllProducts,
    getMyProduct,
    loginFunc,
    fetchNewUsers
}