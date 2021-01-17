const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 5000;
const recipe = require('./recipe/routes')
const search = require('./search/routes')


app.set('view engine', 'ejs')


//app.use(bodyParser.json());

// app.use('/', recipes)

app.get('/', function(req, res) {
    res.render('home');
})

app.use('/search', search)

app.use('/recipe', recipe)

// app.use('/recipe', recipe)

app.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT);
});
