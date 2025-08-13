const {
  validateEmail,
  validateEmailWithReason,
} = require("email-validator-strict");

validateEmail("user@example.com"); // true
validateEmail("user@müller.de"); // true

validateEmailWithReason("user..name@example.com");
// "Local part has consecutive special characters"
