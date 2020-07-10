const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
app.use(express.static('client/index.html'))
require('dotenv').config();


const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, (err) => {

    if(err) {
        console.log('There was an error');
        console.log(err);
    }
    else {
        console.log('Connected to database');
    }
});

const squeezeSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    dateCreated: Date,

});

const Squeeze = mongoose.model('Squeeze', squeezeSchema);


app.get('/', (req, res) => {
    res.json({
        message: 'Squeeze 😈',
    });
})


app.get('/get-liked-squeeze', (req, res) => {
    console.log('i have a request')
    Squeeze.find({status: 'accepted'}, (err, data) => {
        if (err) {
            res.status(400);
            res.end();

        }
        else {
            res.status(200);
            res.json(data);
            res.end();
            console.log(data);
        }
    })
})


app.get('/get-disliked-squeeze', (req, res) => {
    console.log('i have a request')
    Squeeze.find({status: 'rejected'}, (err, data) => {
        if (err) {
            res.status(400);
            res.end();
            return;
        }
        else {
            res.status(200);
            res.json(data);
            res.end();
            console.log(data);
        }

    })
})

app.post('/squeeze', (req, res) => {

    console.log('I have a request');
    const data = req.body;

    if (isValidData(data)) {
        res.status(200).send();

        const squeeze = {
            title: data.title.toString().trim(),
            description: data.description.toString().trim(),
            status: 'default',
            dateCreated: new Date(),
        }

        Squeeze.create(squeeze, (error, data) => {
            if(error) {console.log("There is an error" + error)}
            else {console.log("Good" + data)}
            res.end();
        });

    } else {
        res.status(422).send();
        res.end();

    }

    function isValidData(data) {
        return data.title && data.title.toString().trim() &&
            data.description && data.description.toString().trim();
    }
});

app.get('/get-squeeze', (req, res) => {

    Squeeze.find({ status: 'default' }, (err, data) => {
        if (err) {
            res.status(400);
            res.end();

        }

        else {
            res.status(200);
            res.json(data);
            res.end();
        }
    })
})


app.post('/post-squeeze', (req, res) => {
    console.log(req.body);
    console.log(req.body.idea);
    console.log(req.body._id);

    Squeeze.updateOne({ _id: req.body._id }, { $set: { status: req.body.status } }, (err, data) => {
        if (err) {
            res.status(400);
            res.end();
            return;
        }

        else {
            res.json(data);
            res.status(200);
            res.end();
        }
    })


})


