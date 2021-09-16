import axios from 'axios'

const baseURL = 'http://localhost:3001/v1/'

export const GetCurrent = async (city) => {
  const res = await axios.get(`${baseURL}current/${city}`)
  const { weather, main, name } = res.data
  return { weather, main, name }
}

