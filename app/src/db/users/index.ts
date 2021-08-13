const { MAX } = require('mssql')
const { sql, pools } = require('../../db')
const utils = require('../utils.js')
const user = require('../../models/user')
import Type from '../../../node_modules/@types/mssql/index'

  /*async addUser (obj: user) {
    
    try {
      const sqlQueries = await utils.loadSqlQueries('users')
      const pool = await this.pools
      const insertUser = await pool.request()
        .input('email', sql.VarChar(50), obj.email)
        .input('firstName', sql.VarChar(50), obj.firstName)
        .input('surname', sql.VarChar(50), obj.surname)
        .input('school', sql.VarChar(50), obj.school)
        .input('thumbnail', sql.VarChar(MAX), obj.thumbnail)
        .input('passwordHash', sql.VarChar(MAX), obj.password)
        .input('yearOfStudy', sql.Char(10), obj.yearOfStudy)
        .query(sqlQueries.addUser)
      return insertUser.recordset
    } catch (err) {
      console.log(err)
    }
  }*/

  async function getUserByEmail (email: string) {
    try {
      const sqlQueries = await utils.loadSqlQueries('users')
      const pool = await pools
      const result = await pool.request()
        .input('email', sql.VarChar(50), email)
        .query(sqlQueries.getUserByEmail)
      return result
    } catch (err) {
      console.log(err)
    }
  }


module.exports = {getUserByEmail}
