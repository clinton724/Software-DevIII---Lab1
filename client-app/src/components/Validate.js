
function Validate (values) {
  const errors = {}
  let _error = false
  if (!values.firstName.trim()) {
    errors.firstName = '**FirstName is required'
    _error = true
  }

  if (!values.surname.trim()) {
    errors.surname = '**Surname is required'
    _error = true
  }

  if (!values.email) {
    errors.email = '**Email required'
    _error = true
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '**Email address is invalid'
    _error = true
  }

  if (!values.school) {
    errors.school = '**school required'
    _error = true
  }

  if (!values.yearOfStudy.trim()) {
    errors.yearOfStudy = '**year of study is required'
    _error = true
  }

  if (!values.password) {
    errors.password = '**Password is required'
    _error = true
  } else if (values.password.length < 6) {
    errors.password = '**Password needs to be 6 characters or more'
    _error = true
  }

  if (!values.password2) {
    errors.password2 = '**Password is required'
    _error = true
  } else if (values.password2 !== values.password) {
    errors.password2 = '**Passwords do not match'
    _error = true
  }

  if (_error === true) { return errors } else return false
}

export default Validate
