// DEPENDENCIES
const express = require('express')
const morgan = require('morgan')

const app = express()
const { PORT = 3000 } = process.env

const todos = [
    {
        title: "My first todo",
        content: "My first message"
    }
]

// MIDDLEWARE
app.use(morgan('dev'))


// ROUTES
app.get('/', (req, res) => {
    res.send('Honey Im home')
})

// INDeX
app.get('/todos', (req, res) => {
    res.json(todos)
})

// SHOW
app.get('/todos/:id', (req, res) => {
    let id = parseInt(req.params.id);

    if (NaN(Number(req.params.id))) {
    }
    // find out todo based on the request param
    let foundTodo = todos[req.params.id]
    // respond with the found todo
})


// LISTENER
app.listen(PORT, () => console.log('Listening on port: ${PORT}'))





