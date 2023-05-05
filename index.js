const express = require('express');
const app = express();
const cors = require('cors')
// port of my server
const port =  5000;

// require for chefs json
const recipes = require('./data/recipes.json');

// cors added
app.use(cors())

app.get('/', (req, res) => {
res.send('Chines Chef API  is running for assingment 10')
})


// response for chefs API
app.get('/recipes', (req, res)=>{
    res.send(recipes)
})

app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedRecipes = recipes.find(singleRecipes => singleRecipes.id == id)
    res.send(selectedRecipes)
})

app.listen(port ,()=>{
    console.log(`Chines Chef API is running on ${port}`)
})
