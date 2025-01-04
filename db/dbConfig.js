
const mysql2 = require('mysql2');

const dbconnection = mysql2.createPool({
user:process.env.MYSQL_ADDON_USER,  
database:process.env.MYSQL_ADDON_DB,
host:process.env.MYSQL_ADDON_HOST,
password:process.env.MYSQL_ADDON_PASSWORD,
port:process.env.MYSQL_ADDON_PORT,
    connectionLimit: 10,
    waitForConnections:true
})

// check the connection b/n dotenv & dbConfig first require dotenv with config @ app.js
console.log(process.env.JWT_SECRET);


// when we insert data for  register,answer,question....will happen call backheal so we should turn to PROMISE based
// dbconnection.execute( "select 'test' ", (err,result)=> {

//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log(result);

//     }
// })


module.exports = dbconnection.promise(); 












