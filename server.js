const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())
const port = 3000

//Creating a connection to the mysql db
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'kongk',
    password: 'Bfk57hem+',
    database: 'estate'
});

//Connecting and check if it works 
conn.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

//Selecting all data from my testData table to we can get it on the api
app.get('/', (req, res) => {
    conn.query("SELECT * FROM testData", (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results)
    });
})

//Telling what port it is listening at
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})