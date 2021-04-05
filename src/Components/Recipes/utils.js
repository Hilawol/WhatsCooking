import cusineImg from '../../Assets/Cuisine.jpeg'
import dietImg from '../../Assets/diet.jpeg'
// import ingrediantsImg from '../../Assets/ingrediants.jpeg'
import mealTypesImg from '../../Assets/mealTypes.jpeg'


const categories = [
  {
    id: "cuisines",
    text: "Search by Cuisines",
    description: `Search by Cusines.For example: Italian or Chinese`,
    image: cusineImg,
    subCat: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern", "European", "European",
      "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American"
      , "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]
  },

  {
    id: "diet",
    text: "Search by Dietary",
    description: "Search by Diets. For example: Vegetarian",
    image: dietImg,
    subCat: ["Gluten Free", "Ketogenic", "Vegetarian", "Vegan", "Paleo"]
  },

  {
    id: "mealTypes",
    text: "Search by Meal Type",
    description: "Search by Meal types such as: Soup or Dessert",
    image: mealTypesImg,
    subCat: ["main course", "side dish", "dessert", "appetizer", "salad", "bread",
      "breakfast", "soup", "beverage", "sauce", "marinade", "fingerfood", "snack", "drink"]
  },];


export default categories