console.log("[userService] initialized");
const pool = require('../db/database');
const User = require('../model/user');

exports.getAllUsers = async function () {
    let sqlText = "SELECT * FROM users";
    let res = await pool.query(sqlText);
    let users = [];
    for(let i = 0; i < res.rows.length; i++)
    {
        users.push(User.createUser(
            res.rows[i].id,
            res.rows[i].firstName,
            res.rows[i].lastName,
            res.rows[i].email
            )
        );
    }
    console.log(users);
    return users;
};
exports.saveUser = async function(firstName, lastName, email){
    let sqlText = 'INSERT INTO users(firstName, lastName, email) VALUES($1, $2, $3) RETURNING *';
    let res = await pool.query(sqlText, [firstName, lastName, email]);
    return res.rows[0];
};
exports.deleteUser = async function(id) {
    let sqlText = "DELETE FROM users WHERE id = $1";
    await pool.query(sqlText, [id]);
};
exports.updatedUser = async function(id, firstName, lastName, email){
    let sqlText = 'UPDATE users SET firstName = $1, lastName = $2, email = $3 WHERE id = $4 RETURNING *';
    let res = await pool.query(sqlText, [id, firstName, lastName, email]);
    return res.rows[0];
}
exports.getUser = async function(id){
    let sqlText = "SELECT * FROM users WHERE id = $1";
    let res = await pool.query(sqlText, [id]);
    return res.rows[0];
}