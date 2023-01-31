const formValidation = (
  values,
  requiredFields = [],
  maxLengthFields = [],
  emailFields = [],
  passwordFields = []
) => {
  const errors = {}

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required.'
    }
  })

  maxLengthFields.forEach((field) => {
    let key = Object.keys(field)[0]

    if (values[key] && values[key].length > field[key]) {
      errors[key] = `Maximum allowed length ${field[key]}.`
    }
  })

  emailFields.forEach((field) => {
    if (
      values[field] &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[field])
    )
      errors[field] = 'Invalid email address.'
  })

  passwordFields.forEach((field) => {
    if (
      values[field] &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/i.test(values[field])
    )
      errors[field] =
        'Must contain at least eight characters, one uppercase, one lowercase, and one number.'
  })

  return errors
}

export default formValidation
