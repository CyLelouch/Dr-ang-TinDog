const express = require('express');

const app = express();

const port = 3000;

app.use(express.static(__dirname + '/'));

app.listen(port, ()=> {
    console.log("Application running on port 3000.")
});