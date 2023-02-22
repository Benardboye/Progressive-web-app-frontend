import axios from "axios"

// | "http://localhost:3001"
// Set the base URL for API requests
const baseUrl =  "https://progressive-web-app.onrender.com" 

// Get the JWT token from local storage
const token = localStorage.getItem('signature')

// Make a POST request to the API
export const apiPost = async (path, data) => {
    
    const result = await axios.post(`${baseUrl}${path}`, data,  {
        headers:{
            Authorization:`Bearer ${token}` // Attach the JWT token to the request headers
        } 
    })
    return result
}

// Make a PATCH request to the API
export const apiPatch = async (path, data) => {
    
    const result = await axios.patch(`${baseUrl}${path}`, data,  {
        headers:{
            Authorization:`Bearer ${token}` // Attach the JWT token to the request headers
        } 
    })
    return result
}

// Make a GET request to the API
export const apiGet = async (path, data) => {
    
    const result = await axios.get(`${baseUrl}${path}`, data,  {
        headers:{
            Authorization:`Bearer ${token}` // Attach the JWT token to the request headers
        }
    })
    return result
}

// Make a GET request to the API without sending any data
export const apiGetWithoutData = async (path) => {
    
    const result = await axios.get(`${baseUrl}${path}`,  {
        headers:{
            authorization:`Bearer ${token}` // Attach the JWT token to the request headers
        }
    })
    return result
}