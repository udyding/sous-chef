const express = require('express');
const router = express.Router();

const { getRecipeInfo, getSteps } = require('./utils');

router.get('/getRecipeInfo', async (req, res) => {
    try {
        const { id } = req.query;
        const results = await getSteps(id);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;