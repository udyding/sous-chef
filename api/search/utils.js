const axios = require('axios');
const { API_KEY } = require('../config');


async function getSearchResults(query) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`
        })
        let results = response.data.results;
        console.log(results);
    } catch (err) {
        console.log(err.response);
    } 
}

module.exports = {
    getSearchResults,
}