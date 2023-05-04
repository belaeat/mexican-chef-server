const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const chef = require('./data/chef.json')

const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
    res.send("Dragon in running")
})

// Chef's data load

app.get('/chef', (req, res) => {
    res.send(chef);
})

// Recipes data load

app.get('/recipes', (req, res) => {
    res.send(recipes)
})



app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})