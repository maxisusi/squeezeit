const express = require('express');
const cors = require('cors');
const Datastore = require('nedb');
const app = express();

const database = new Datastore('squeeze.db');
database.loadDatabase();

app.listen(1337, () => {
    console.log('Listening to port 1337');
})

app.use(cors());
app.use(express.json());
app.use(express.static('client/index.html'))

app.get('/', (req, res) => {
    res.json({
        message: 'Squeeze 😈',
    });
})

app.post('/squeeze', (req, res) => {

    const data = req.body;

    if (isValidData(data)) {
        res.status(200).send();

        const squeeze = {
            title: data.title.toString().trim(),
            description: data.description.toString().trim(),
            status: 'default',
            dateCreated: new Date(),
        }

        database.insert(squeeze);

    } else {
        res.status(422).send();

    }

    function isValidData(data) {
        return data.title && data.title.toString().trim() &&
            data.description && data.description.toString().trim();
    }
});

app.get('/get-squeeze', (req, res) => {

    database.find({status: 'default'}, (err, data) => {
        if (err) {
            res.status(400);
            res.end();
            return;
        }

        else {
            res.status(200);
            res.json(data);
        }
    })
})


app.post('/post-squeeze', (req, res) => {
    console.log(req.body);
    console.log(req.body.idea);
    console.log(req.body._id);
    
    database.update({_id: req.body._id}, {$set: {status: req.body.status}}, (err, data) => {
        if (err) {
            res.status(400);

            return;
        }

        else {
            res.json(data);
            res.status(200);
        }
    })




})


