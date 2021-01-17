const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

const { getRecipeInfo, getSteps } = require('./utils');

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

router.get('/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const results = await getRecipeInfo(recipeId);
        res.render('recipeInfo', { recipeInfo: results });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/getSteps', async (req, res) => {
    try {
        const { id } = req.query;
        const results = await getSteps(id);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;