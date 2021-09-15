import axios from 'axios'

const baseURL = 'http://localhost:3001/v1/'

export const GetForecast = async (city) => {
  console.log('Get current started')
  const res = await axios.get(`${baseURL}forecast/${city}`)
  return res.data
}

