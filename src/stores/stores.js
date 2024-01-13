import { defineStore } from 'pinia'
import WeatherService from '@/services/WeatherService.js'

export const UseWheatherStore = defineStore('stores', {
  //state
  state: () => ({
    is_loading: false,
    country: 'Uzbekistan',
    weather_data: []
  }),
  // GETTERS
  getters: {
    get_loading() {
      return this.is_loading
    },
    get_country() {
      return this.country
    },
    get_weather_data() {
      return this.weather_data
    }
  },

  // ACTIONS AND MUTATIONS
  actions: {
    set_loading(value) {
      this.is_loading = value
    },
    set_country(value) {
      this.country = value
    },
    set_weather_data(value) {
      this.weather_data = value
    },

    // FETCH WEATHER DATA
    async fetchWeatherData() {
      this.set_loading(true)
      await WeatherService.GetWeatherData(this.get_country)
        .then((response) => {
          let response_data = JSON.stringify(response.data)
          console.log(response_data)
          this.set_weather_data(response_data)
        })
        .catch((error) => {
          //raise error for work service.interceptors.response
          console.log(error)
          throw error
        })
      this.set_loading(false)
    }
  }
})
