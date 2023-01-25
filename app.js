const express = require('express')
const cowsay = require('cowsay')
const morgan = require('morgan');

const error404 = require('./middlewares/error404')

// Módulos de Rutas
const entriesApiRoutes = require('./routes/entriesApiRoutes')
const authorsApiRoutes = require('./routes/authorsApiRoutes')

const app = express()
const port = 3000
app.use(morgan("dev"));

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//Rutas 
app.use('/api/entries',entriesApiRoutes); // Rutas API entries
app.use('/api/authors',authorsApiRoutes); // Rutas API authors
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
})