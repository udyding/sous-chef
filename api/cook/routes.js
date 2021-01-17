const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

const { getSteps } = require('./utils');

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

router.get('/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const steps = await getSteps(recipeId);
        console.log(steps)
        //res.render('cooking', { steps: steps });
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;