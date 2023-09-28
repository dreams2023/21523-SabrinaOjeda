// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router()
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion
} = require('../controllers/blog.controllers');


// ==================================================
//         Rutas para renderizar vistas
// ==================================================
//vista principal
router.get('/', (req, res) => {
    res.render('home')
})
router.get('/api/publicaciones', (req, res) => {
    res.render('home')

})

// Ruta para devolver la vista administrar publicaciones
router.get('/admin/publicaciones', (req, res)=> {
     return res.render('tabla-publicaciones')
})

// Ruta para devolver la vista para agregar nueva publicacion
router.get('/admin/nueva-publicacion', (req, res)=> {
    return res.render('nueva-publicacion')
})

//Ruta para devolver la vista para editar publicacion exitente
router.get('/admin/editar-pubicacion/:id', (req, res) => {
    res.render('editar-publicacion', { id: req.params.id })
})





// ==================================================
//         Rutas para CRUD de Publicaciones
// ==================================================

// Crear nueva publicación
router.post('/api/publicacion', crearPublicacion);

// Obtener todas las publicaciones
router.get('/api/publicaciones', obtenerPublicaciones);

// Obtener una publicación
router.get('/api/publicacion/:id', obtenerPublicacion)

// Actualizar una publicación
router.put('/api/publicacion/:id', actualizarPublicacion);

// Eliminar una publicación
router.delete('/api/publicacion/:id', eliminarPublicacion);

module.exports = router;