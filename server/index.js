const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3022;

app.get('/', ( req, res ) => {
    db.init();
    res.send('Replica Set Hello ')
})

app.get('/test', ( req, res ) => {
    db.Task.find((err, task) => {
        if(err) res.status(500).send({error: err});
        res.json(task)
    })
})

app.listen(port, () => console.log(`Server is runing ${port}`))
