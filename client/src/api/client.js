import axios from "axios";
import queryString from 'query-string'
import apiConfigs from './configs'

const privateClient = axios.create({
    baseURL: apiConfigs.BASE_URL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

privateClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${apiConfigs.BEARER}`
        }
    }
})

privateClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (err) => {
    throw err.response.data
})

export default privateClient