const express = require('express');
const bodyParser = require('body-parser');

let app = express();
const PORT = 5000;

const search = require('./search/routes');
const recipe = require('./recipe/routes')

const router = express.Router();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Connected to app.')
    // this is where the home page goes
})

app.get('/search', function(req, res) {
    
})
app.use('/recipe', recipe)

app.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT);
});
