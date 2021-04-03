import axios from 'axios'
const api = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  params: {
    apiKey: "8c4cf547f295464a9c0b9fe358a906ed",
  }
})

export default api
