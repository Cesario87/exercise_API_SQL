const entry = require('../models/authors'); // Importar el modelo de la BBDD

// GET http://localhost:3000/entries --> ALL
const getAuthors = async (req, res) => {
    let authors;
    authors = await entry.getAuthors();
    res.status(200).json(authors); // [] con las entries encontradas
}

const getAuthorByEmail = async (req, res) => {
    let author;
    let email = req.query.email;
    author = await entry.getAuthorByEmail(email);
    res.status(200).json(author); // [] con las entries encontradas
}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {title,content,email,category}
    const response = await entry.createAuthor(newAuthor);
    res.status(201).json({
        "items_created": response,
        data: newAuthor
    });
}

const updateAuthor = async (req, res) => {
    const email = req.query.email;
    const updateAuthor = req.body;
    const response = await entry.updateAuthor(updateAuthor, email);
    res.status(200).json({ msj: "Modified" });
}

const deleteAuthor = async (req, res) => {
    const email = req.body.email;
    const response = await entry.deleteAuthor(email);
    res.status(200).json({msj: "Author deleted: " + email});
}

module.exports = {
    getAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}