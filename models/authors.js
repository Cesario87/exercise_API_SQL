const { Pool } = require('pg');
const queries = require('./queries')
const pool = require('../utils/db_pgsql');
// new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     database: 'postgres',
//     password: "123456"
// })

const getAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthors);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const getAuthorByEmail = async (email) => {
        let client, result;
        try {
            client = await pool.connect(); // Espera a abrir conexion
            const data = await client.query(queries.getAuthorByEmail, [email])
            result = data.rows
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            client.release();
        }
        return result
    }

// CREATE
const createAuthor = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateAuthor = async (updateAuthor, email) => {
    const { name, surname, newEmail, image } = updateAuthor;
    let client, result;
    console.log(updateAuthor);
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [name, surname, newEmail, image, email]);
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

// DELETE 
const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor,[email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const authors = {
    getAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor,
}

module.exports = authors;