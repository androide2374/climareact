import axios from 'axios'

const baseURL = 'http://localhost:3001/v1/'

export const GetForecast = async (city) => {
  const res = await axios.get(`${baseURL}forecast/${city}`)
  return res.data
}

