import mysql from "mysql2";

const sqldb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mukul123@",
    database: "game_db"
});

sqldb.connect((err) => {
    if (err) throw err;
    console.log('MySQL DB Connected');
});

export default sqldb;