import sqldb from "../config/mySql.js";

class User {
    static findByEmail(email, callback) {
        sqldb.query('SELECT * FROM users WHERE email = ?', [email], callback);
    }

    static create(newUser, callback) {
        sqldb.query('INSERT INTO users SET ?', newUser, callback);
    }
}

export default User;