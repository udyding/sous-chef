require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 5000;
const recipe = require('./recipe/routes')
const search = require('./search/routes')
const cook = require('./cook/routes')

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.use(express.static('public'))

//app.use(bodyParser.json());

// app.use('/', recipes)

app.get('/', function(req, res) {
    res.render('home');
})

app.use('/search', search)

app.use('/recipe', recipe)

app.use('/cook', cook)

app.listen(process.env.PORT || PORT, () => {
    console.log('Listening on http://localhost:' + PORT);

    
});
