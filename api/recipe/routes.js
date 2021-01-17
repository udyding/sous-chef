const express = require('express');
const router = express.Router();

const { getRecipeInfo } = require('./utils');

router.get('/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const results = await getRecipeInfo(recipeId);
        res.render("recipeInfo", { recipeInfo: results })
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;