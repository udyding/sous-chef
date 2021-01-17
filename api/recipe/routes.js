const express = require('express');
const router = express.Router();

const { getRecipeInfo, getSteps } = require('./utils');

router.get('/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.query;
        const results = await getSteps(recipeId);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;