const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new error("name is not valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new error("please enter a strong password ");
  }
};

module.exports = validateSignUpData;
