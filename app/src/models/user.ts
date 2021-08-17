

class user {
    email: string
    firstName: string
    surname: string
    school: string
    thumbnail: string
    password: string
    yearOfStudy: string

  constructor (email: string, firstName: string, surname: string , 
    school: string, thumbnail: string, password: string, yearOfStudy: string) {
    this.email = email
    this.firstName = firstName
    this.surname = surname
    this.thumbnail = thumbnail
    this.password = password
    this.yearOfStudy = yearOfStudy
    this.school = school
  }
}
module.exports = user
