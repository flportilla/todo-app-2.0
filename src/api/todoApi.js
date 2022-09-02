import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_API_URL, VITE_API_URL_DEV } = getEnvVariables()

const todoApi = axios.create({
    //baseURL: VITE_API_URL
    baseURL: VITE_API_URL_DEV
})

// Add a request interceptor
todoApi.interceptors.request.use(
    config => {

        const token = localStorage.getItem('token')

        if (token) {
            config.headers['x-todo'] = token
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

export default todoApi