const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 5000;

const recipes = require('./recipes/routes')


app.set('view engine', 'ejs')


//app.use(bodyParser.json());

// app.use('/', recipes)

app.get('/', function(req, res) {
    res.render('home');
})

app.use('/recipes', recipes)

app.use('/recipe', recipe)

// app.use('/recipe', recipe)

app.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT);
});
