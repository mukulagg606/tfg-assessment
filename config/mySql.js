import mysql from "mysql2";

const sqldb = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

sqldb.connect((err) => {
    if (err) throw err;
    console.log('MySQL DB Connected');
});

export default sqldb;