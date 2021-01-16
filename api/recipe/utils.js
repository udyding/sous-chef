const axios = require('axios');
const { API_KEY } = require('../config');


// gets the basic recipe info from an id
async function getRecipeInfo(id/*, name, image, imageType*/) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        })
        let info = response.data;
        let prepTime = info.preparationMinutes;
        let cookingTime = info.cookingMinutes;
        let title = info.title;
        let ingredientsInfo = info.extendedIngredients;
        let ingredients = [];
        for (let ingredientInfo in ingredientsInfo) {
            ingredients.push(ingredientsInfo[ingredientInfo].name)
        }
        return [prepTime, cookingTime, title, ingredients];
    } catch (err) {
        console.log(err.response);
    } 
}

// gets the steps only from a recipe
async function getSteps(id) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
        })
        let info = response.data;
        // there may be multiple things being made, each with their own steps
        let itemsSteps = info[0].steps;
        let listOfSteps = [];
        let listOfNumbers = [];
        for (let step in itemsSteps) {
            pair = [itemsSteps[step].number, itemsSteps[step].step];
            listOfSteps.push(pair)
        }
       
        return listOfSteps;
    } catch (err) {
        console.log(err.response);
    }
}

module.exports = {
    getRecipeInfo,
    getSteps
}