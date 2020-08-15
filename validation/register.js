const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Mobile Number checks
  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile Number field is required";
  } else if (!Validator.isEmail(data.mobile)) {
    errors.mobile = "Mobile Number is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  
  //Address checks
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }

  //City checks
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  //Postal code checks
  if (Validator.isEmpty(data.postal_code)) {
    errors.postal_code = "Postal Code field is required";
  }

  if (!Validator.isLength(data.postal_code, { min: 6, max: 6 })) {
    errors.password = "Postal code must be of 5 digits.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
