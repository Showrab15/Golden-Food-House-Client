const express = require('express');
const app = express();
const cors = require('cors')
// port of my server
const port =  5000;

const recipes = require('./data/recipes.json');

app.use(cors())

app.get('/', (req, res) => {
res.send('Food Recipe is running')
})


// response for recipes API
app.get('/recipes', (req, res)=>{
    res.send(recipes)
})

app.listen(port ,()=>{
    console.log(`Food Recipe API is running on ${port}`)
})
