const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI;

mongoose.connect (DB_URI, {useNewUrlParser:true, useUnifiedTopology: true} )
    .then( ()=>{
        console.log(`conected to de DB ${DB_URI}`);
    })
    .catch( ()=>{
        console.log(`there was an error when trying to connect to the database: ${DB_URI} `);
    })