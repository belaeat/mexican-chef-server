const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const chefs = require('./data/chef.json')

const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
    res.send("Dragon in running")
})

// Chef's data load

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

// Recipes data load

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

// find from recipes id

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const selectedRecipe = recipes.find(recipe => recipe.id == id)
    res.send(selectedRecipe)
})

// Chef and recipes data matching

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    const chefsRecipes = recipes.filter(n => n.chef_id == id)
    res.send(chefsRecipes)
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})