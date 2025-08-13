const { validateEmail, validateEmailWithReason } = require("./index");

const tests = [
  ["abh.kum12-sh_sh%er@yahoo.co.in", true],
  ["abh.kum12-sh@yahoo.com", true],
  ["abh.kum12-sh@yahoo-mail.com", true],
  ["abh..kum12-sh@yahoo-mail.com", false],
  ["abh.kum12-sh@yahoo--mail.co.in", false],
  ["abh.kum12-sh@yahoo-mail.c-o.in", false],
  ["abh.kum12-sh.@yahoo.com", false],
  ["-abh.kum12@yahoo.com", false],
  ["abh.kum12-@yahoo.com", false],
  ["user@müller.de", true],
  ["user@пример.рф", true],
  ["user..name@domain.com", false],
];

tests.forEach(([email, expected]) => {
  const result = validateEmail(email);
  console.log(`${email} → ${result} (${result === expected ? "✅" : "❌"})`);
});
