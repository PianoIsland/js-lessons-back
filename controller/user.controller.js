const timers = require("timers");
const db = require('../db')
const {rows} = require("pg/lib/defaults");
class UserController{
    async createUser(req, res){
        const {title, description, isDone} = req.body
        const newPerson = await db.query('INSERT INTO person (title, description, isDone) values ($1,$2,$3) RETURNING *', [title, description, isDone])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res){
        const id = req.params.id
        const {title, description, isDone} = req.body
        const user = await db.query(
            'UPDATE person set title = $1, description = $2, isDone = $3 where id =$4 RETURNING *',
            [title, description, isDone, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async DeleteALLUsers(req, res){
        const users = await db.query('DELETE FROM person')
        res.json(users.rows)
    }
}
module.exports= new UserController()