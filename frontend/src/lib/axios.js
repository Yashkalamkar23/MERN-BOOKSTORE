import axios from "axios"
const api = axios.create({
    baseURL : 'https://mern-bookstore-lerh.onrender.com'
})
export default api
