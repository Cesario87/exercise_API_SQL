const queries = {
    getAllEntries:
        `SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    ORDER BY e.title;`,
    createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    updateEntry: `
    UPDATE entries
    SET category = $1, content = $2, title = $3, date = $4
    WHERE title=$5;`,
    deleteEntry: `
    DELETE 
    FROM entries AS e
    WHERE e.title=$1`,
    getAuthors:
        `SELECT a.id_author,a.name,a.surname,a.email,a.image
    FROM authors AS a
    ORDER BY a.id_author;`,
    getAuthorByEmail:
        `SELECT a.id_author,a.name,a.surname,a.email,a.image
    FROM authors AS a
    WHERE a.email=$1;`,
    createAuthor:
        `INSERT INTO authors(name, surname, email, image) 
    VALUES ($1, $2, $3, $4);`,
    updateAuthor:
        `UPDATE authors
    SET name = $1, surname = $2, email = $3, image = $4
    WHERE email=$5;`,
    deleteAuthor: `
    DELETE 
    FROM authors AS a
    WHERE a.email=$1`,
}

module.exports = queries;