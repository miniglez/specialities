const express = require("express")
const app = express()
const worker = require("./worker.js")

const workerFilter = (data) => {
    const workerList = worker.filter((element) => element.specialty == data)
    let liTemplate = ``
    for(let element of workerList){
        liTemplate += 
        `
            <li>${element.name} de ${element.age} pertenece a la rama de ${element.specialty}</li>
        `
    }
    const template = `
        <a href="/">HOME</a>
        <h1>${data.toUpperCase()} son ${workerList.length} trabajadores</h1>
        <ul>${liTemplate}</ul>
    `
    return template
}

app.get("/", (req, res) => {
    res.send(
        `
            <h1>Plantilla de la empresa</h1>
            <a href="/developers">Desarrolladores</a><hr>
            <a href="/marketing">Marketing</a><hr>
            <a href="/qa">Qa's</a><hr>
            <a href="/ventas">Ventas</a>
        `)


})

app.get("/developers", (req, res) => {
    const template = workerFilter("developers")
    res.send(template)
})
app.get("/marketing", (req, res)=> {
    const template = workerFilter("marketing")
    res.send(template)
})
app.get("/qa", (req, res)=> {
    const template = workerFilter("QAs")
    res.send(template)
})
app.get("/ventas", (req, res)=> {
    const template = workerFilter("ventas")
    res.send(template)
})

app.use((req ,res) => {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000, () => {
    console.log("Exoress exuxha en el enlace http://localhost:3000/")
})