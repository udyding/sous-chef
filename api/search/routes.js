const express = require('express');
const router = express.Router();

const { getSearchResults } = require('./utils');

// displays possible results based on a search query
router.get('/:search', async (req, res) => {
    try {
        const { search } = req.params;
        const results = await getSearchResults(search);
        return res.render('items/search', { query: search});
    } catch (err) {
        return res.render('items/search', { query: null })
    }
})

module.exports = router;