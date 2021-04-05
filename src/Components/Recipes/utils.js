import cusineImg from '../../Assets/Cuisine.jpeg'
import dietImg from '../../Assets/diet.jpeg'
// import ingrediantsImg from '../../Assets/ingrediants.jpeg'
import mealTypesImg from '../../Assets/mealTypes.jpeg'


const categories = [
  {
    id: "cuisines",
    text: "Search by Cuisines",
    image: cusineImg,
    subCat: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern", "European", "European",
      "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American"
      , "Mediterranean", "Mexican", "Middle", "Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]
  },

  {
    id: "diet",
    text: "Search by Dietary",
    image: dietImg,
    subCat: ["Gluten Free", "Ketogenic", "Vegetarian", "Vegan", "Paleo"]
  },

  {
    id: "mealTypes",
    text: "Search by Meal Type",
    image: mealTypesImg,
    subCut: ["main course", "side dish", "dessert", "appetizer", "salad", "bread",
      "breakfast", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
  },];


export default categories