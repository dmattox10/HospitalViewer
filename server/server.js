const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'VV!Zh8!$',
    database: 'hospitaldatabase',
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const type = req.body.type;
    const npi = req.body.npi;

    db.query(
        'INSERT INTO hospitals (name, location, type, npi) VALUES (?,?,?,?)',
        [name, location, type, npi],
        (err, res) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Values successfully inserted');
            }
        }
    );
});

app.get('/hospitals', (req, res) => {
    db.query('SELECT * FROM hospitals', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put('/edit', (req, res) => {
    const id = req.body.id;
    const npi = req.body.npi;
    db.query(
        'UPDATE hospitals SET npi = ? WHERE id = ?',
        [npi, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete('/delete:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM hospitals WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(4000, () => {
    console.log('yo!');
});
