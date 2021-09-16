import axios from 'axios'

const baseURL = 'http://localhost:3001/v1/'

export const GetCurrentCity = async () => {
  console.log('Get location started')
  const res = await axios.get(`${baseURL}location/`)
  window.localStorage.setItem('city', res.data.city)
}