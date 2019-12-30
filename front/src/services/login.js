import axios from 'axios'
const baseUrl = 'api/login'

const login = async ({username, password}) => {
  console.log(username, password)
  const response = await axios.post(baseUrl, {username, password})
  console.log(response.data)
  return response.data
}

export default {login}

//SAVES TO DB AND EVERYTHING JUST DOESNT UPDATE UI. 
