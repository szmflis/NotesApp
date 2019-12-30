import axios from 'axios'

const baseUrl = '/api/users'

const register = async ({username, password, name}) => {
  console.log("Received Register Credentials:" )
  console.log(`Username: ${username}`)
  console.log(`Password: ${password}`)
  console.log(`Name: ${name}`)

  const response = await axios.post(baseUrl, {username, password, name})
  console.log(`Response data: `)
  console.log(response.data)

  return response.data
}

export default {register}
