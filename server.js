const express = require('express')
//Objeto
const app = express()
//URL prueba
app.get('/prueba',(req, res)=>{
    //EJEMPLO RESPONSE
    res.send("Hola Brou")
})

//URIS BOOTCAMPS
//Selecionar todos los bootcamps
app.get('/bootcamps',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todo los bootcamps"
    })
})

//Seleccionar el bootcamp cuyo id se pase por parametro 
app.get('/bootcamps/:id',(req, res)=>{
    bootcampId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando bootcamp cuyo id es: ${bootcampId}`
    })
})

//Crear bootcamp
app.post('/bootcamps',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear bootcamp"
    })
})

// Actualizar bootcamp por ID
app.put('/bootcamps/:id',(req, res)=>{
    bootcampId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando bootcamp cuyo id es: ${bootcampId}`
    })
})

// Eliminar bootcamp por ID
app.delete('/bootcamps/:id',(req, res)=>{
    bootcampId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminado bootcamp cuyo id es: ${bootcampId}`
    })
})


//URIS CURSES
//Selecionar todos los cursos
app.get('/curses',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todos los cursos"
    })
})

//Seleccionar el curso cuyo id se pase por parametro 
app.get('/curses/:id',(req, res)=>{
    curseId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando curso cuyo id es: ${curseId}`
    })
})

//Crear curse
app.post('/curses',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear curse"
    })
})

// Actualizar curse por ID
app.put('/curses/:id',(req, res)=>{
 curseId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando curse cuyo id es: ${curseId}`
    })
})

// Eliminar curse por ID
app.delete('/curses/:id',(req, res)=>{
 curseId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminado curse cuyo id es: ${curseId}`
    })
})

//URIS REVIEWS
//Selecionar todos los review
app.get('/reviews',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todos los review"
    })
})

//Seleccionar el review cuyo id se pase por parametro 
app.get('/reviews/:id',(req, res)=>{
    reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando review cuyo id es: ${reviewId}`
    })
})

//Crear review
app.post('/reviews',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear review"
    })
})

// Actualizar review por ID
app.put('/reviews/:id',(req, res)=>{
 reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando review cuyo id es: ${reviewId}`
    })
})

// Eliminar review por ID
app.delete('/reviews/:id',(req, res)=>{
 reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminado review cuyo id es: ${reviewId}`
    })
})

//URIS USERS
//Selecionar todos los user
app.get('/users',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todos los user"
    })
})

//Seleccionar el user cuyo id se pase por parametro 
app.get('/users/:id',(req, res)=>{
    userId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando user cuyo id es: ${userId}`
    })
})

//Crear user
app.post('/users',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear user"
    })
})

// Actualizar user por ID
app.put('/users/:id',(req, res)=>{
 userId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando user cuyo id es: ${userId}`
    })
})

// Eliminar user por ID
app.delete('/users/:id',(req, res)=>{
 reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminando user cuyo id es: ${reviewId}`
    })
})


//Puerto Server
const PUERTO = 4500
//Servidor
app.listen(PUERTO, 
            console.log(`Server ejecutando en puerto: ${PUERTO}`))