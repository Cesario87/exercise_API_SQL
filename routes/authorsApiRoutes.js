const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsApiController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.get('/email', authorsApiController.getAuthorByEmail);// GET http://http://localhost:3000/api/authors/email?email=birja@thebridgeschool.es
authorsApiRouter.post('/', authorsApiController.createAuthor);
authorsApiRouter.put('/', authorsApiController.updateAuthor);
authorsApiRouter.delete('/', authorsApiController.deleteAuthor);

module.exports = authorsApiRouter;