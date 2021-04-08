import axios from 'axios'
const api = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  params: {

    apiKey: "8c4cf547f295464a9c0b9fe358a906ed",
    // apiKey: "b0378c1dd5b845c99438e787a66f28e3",
    // "8c4cf547f295464a9c0b9fe358a906ed"
    //to use:49c9a946e86a4abbb0cf1e502577ecbe
    number: 1,
    instructionsRequired: true,
    addRecipeInformation: true,
    limitLicense: true,
  }
})

export default api
