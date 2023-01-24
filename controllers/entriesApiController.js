const entry = require('../models/entries'); // Importar el modelo de la BBDD

// GET http://localhost:3000/entries --> ALL
const getEntries = async (req, res) => {
    let entries;
    entries = await entry.getAllEntries();
    res.status(200).json(entries); // [] con las entries encontradas
}

const updateEntry = async (req, res) => {
    const title = req.query.title;
    const updateEntry = req.body;
    const response = await entry.updateEntry(updateEntry, title);
    res.status(200).json({ msj: "Modified" });
}

const deleteEntry = async (req, res) => {
    const title = req.body.title;
    const response = await entry.deleteEntry(title);
    res.status(200).json({msj: "Entry deleted: " + title});
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry, //PUT
    deleteEntry, // DELETE
    
}