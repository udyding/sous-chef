const axios = require('axios');
const { API_KEY } = require('../config');



// gets the steps only from a recipe
async function getSteps(id) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
        })
        let info = response.data;

        // there may be multiple things being made, each with their own steps
        let allItemsSteps = [];
        for (let item in info) {
            let itemSteps = info[item].steps
            let itemName = info[item].name;
            if (itemName == '') {
                allItemsSteps.push("Main recipe")
            } else {
                allItemsSteps.push(itemName)
            }
            
            for (let step in itemSteps) {
                allItemsSteps.push(itemSteps[step].number + ". " + itemSteps[step].step)
            }

            
        }
        return allItemsSteps;
    } catch (err) {
        console.log(err.response);
    }
}

//speech functions


module.exports = {
    getSteps,
}