// Application Programming Interface
// REST - Representational State Transfer

// GET
// POST
// PUT / PATCH
// DELETE

// JSON - JavaScript Object Notation


import express from "express";
//Acessa dependencia Express Package.json, e importa dados do Node_modules

const app = express();
// app consolida API, com a pasta Node_Modules(express)

const PORT = 3000;
// Porta usada

const arrayResponse = [
    {name: "Maxwell", company: "MC corp"},
    {name: "Maxwell", company: "MC corp"},
];

// app.listen(3000, () => { console.log('Servidor na porta 3000')}) função callback SEM const

app.listen(PORT, () => { console.log(`Servidor na porta ${PORT}`)}) // função callback COM const

// app.get('/', (request, response) => { response.send("Olá mundoss");}) // SEM const

app.get('/', (request, response) => { response.json("arrayResponse");}) // COM const

