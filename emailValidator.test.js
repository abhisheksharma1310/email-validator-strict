const { validateEmail, validateEmailWithReason } = require("./index");

describe("validateEmail", () => {
  test("valid email", () => {
    expect(validateEmail("abh.kum12-sh@yahoo.com")).toBe(true);
  });

  test("invalid: consecutive dots", () => {
    expect(validateEmail("abh..kum12@yahoo.com")).toBe(false);
  });

  test("invalid: starts with hyphen", () => {
    expect(validateEmail("-abh.kum12@yahoo.com")).toBe(false);
  });

  test("invalid: TLD with hyphen", () => {
    expect(validateEmail("abh.kum12@yahoo-mail.c-o.in")).toBe(false);
  });
});

describe("validateEmailWithReason", () => {
  test("returns true for valid email", () => {
    expect(validateEmailWithReason("abh.kum12-sh@yahoo.com")).toBe(true);
  });

  test("returns reason for invalid email", () => {
    expect(validateEmailWithReason("abh..kum12@yahoo.com")).toBe(
      "Local part has consecutive special characters"
    );
  });
});
