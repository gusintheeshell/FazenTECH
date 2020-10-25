const mysql = require('mysql');

var pool = mysql.createPool({
    "user":"haadouukeen",
    "password":"40028922igor",
    "database":"teste2671",
    "host":"mysql669.umbler.com",
    "port":3306
});

// var pool = mysql.createPool({
//     "user":"root",
//     "password":"root",
//     "database":"teste3",
//     "host":"localhost",
//     "port":3306
// });

exports.pool = pool;