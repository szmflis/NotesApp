import axios from 'axios'

const baseUrl = '/api/users'

const register = async ({ username, password, name }) => {
  const response = await axios.post(baseUrl, { username, password, name })
  return response.data
}

export default { register }
