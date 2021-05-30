const express = require('express');
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);


mongoose.connect('mongodb+srv://sistema:lucas322@cluster0.aedhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});




app.listen(19002);

