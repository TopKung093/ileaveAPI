const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const auth = require('./middleware/auth');
const app = express();
app.use(json());
require('dotenv').config();
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.use(routes);
app.post('/welcome', auth, (req, res) => {
    res.status(200).send(`Welcome bro`);
})
const { DATABASE_URL } = process.env
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Database connect");
    })
    .catch((error) => {
        console.log("Error");
    })

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
});
