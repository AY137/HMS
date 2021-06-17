const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
const routes = require('./routes/api');
app.use(routes);




mongoose.connect("mongodb+srv://amit-y123:DxuBCoynBTW7Fl1X@test.lgspg.mongodb.net/hms1?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("welcome to database connection"));






app.listen(4545, () => {


    console.log('up and running');
})