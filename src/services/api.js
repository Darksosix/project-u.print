// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // เปลี่ยนตาม URL ของ Back-end
})

// เพิ่ม interceptor เพื่อใส่ token ใน headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default api
