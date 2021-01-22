const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

const { getSearchResults } = require('./utils');

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

// displays possible results based on a search query
router.get('', async (req, res) => {
    try {
        const { searchterm } = req.query;
        const searchResults = await getSearchResults(searchterm);
        res.render("results", { searchResults: searchResults });
    } catch (err) {
        console.log(error);
    }
})

module.exports = router;