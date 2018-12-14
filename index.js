const express = require("express"); 
const bodyParser = require('body-parser');
const massive = require("massive");
require("dotenv").config();
const products_controller = require('./products_controller');

const app = express();
app.use( bodyParser.json() );
massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log("Database connected");
}).catch( err => console.log(err) )

app.post( '/api/products', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/products/:id', products_controller.getOne );
app.put( '/api/products/:id', products_controller.update );
app.delete( '/api/products/:id', products_controller.delete );

app.listen(3000, () => {
    console.log("Listening on 3000")
});