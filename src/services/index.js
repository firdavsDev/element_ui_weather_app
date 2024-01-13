import axios from 'axios'
import { UseWheatherStore } from '@/stores/stores'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  timeout: 5000,
  headers: {
    'X-RapidAPI-Key': 'ec8ac40354msh96f86eace263bd6p1a3c90jsn0d494b0ea68e',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
})

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      ElMessage.success("Ma'lumotlar muvaffaqiyatli yuklandi!")
    }
    return response
  },
  (error) => {
    if (error.response && error.response.status === 400) {
      ElMessage.error("Ma'lumotlar yuklanishida xatolik yuz berdi!")
    }
    return Promise.reject(error)
  }
)

// set loading true before request is sent and false
// after response is received or error
service.interceptors.request.use((config) => {
  UseWheatherStore().set_loading(true)
  return config
})

service.interceptors.response.use((response) => {
  UseWheatherStore().set_loading(false)
  return response
})

export default service
