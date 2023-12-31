//Importación de librerías
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Conexión a Base de Datos
const { sequelize,conectarDB } = require('./database');




require('ejs');
require('dotenv').config() // Para poder usar las variables de entorno

conectarDB();

const app = express()
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) // Para que el servidor pueda comprender datos en formato json

// Archivos estáticos
app.use( express.static(path.join(__dirname, 'public')) )

// Motor de plantillas
app.set('view engine', 'ejs')

// Rutas
app.use(require('./routes/blog.routes'));


app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))