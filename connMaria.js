var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'mps01.com',
    port : 3306,
    user : 'root',
    password : 'Hadoop#02',
    database : 'service'
});

connection.connect(function() {
    console.log('success!');
});

connection.query('SELECT now()', 
    function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        connection.destroy();
    }
);

