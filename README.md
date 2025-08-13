![Node.js CI](https://github.com/abhishek1310/email-validator-strict/actions/workflows/test.yml/badge.svg)

# email-validator-strict

A strict and reliable email validator using regular expressions, with support for internationalized domain names (IDNs) like `müller.de` or `пример.рф`.

---

## 🚀 Features

- ✅ Enforces real-world email formatting rules
- ✅ Prevents consecutive special characters
- ✅ Validates domain and top-level domain structure
- ✅ Supports internationalized domain names (via `punycode`)
- ✅ Returns descriptive error messages
- ✅ TypeScript support with type definitions
- ✅ Lightweight and dependency-free (except `punycode`)

---

## Install

```bash
npm install email-validator-strict
```

## Usage

### JavaScript

```js
const {
  validateEmail,
  validateEmailWithReason,
} = require("email-validator-strict");

console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("user@müller.de")); // true
console.log(validateEmail("user..name@example.com")); // false

console.log(validateEmailWithReason("user..name@example.com"));
// "Local part has consecutive special characters"
```

### TypeScript

```ts
import { validateEmail, validateEmailWithReason } from "email-validator-strict";

const isValid: boolean = validateEmail("user@пример.рф");

const result: true | string = validateEmailWithReason("user.@domain.com");
// result = "Local part starts or ends with special character"
```

---

## API

validateEmail(email: string): boolean
Returns true if the email is valid, otherwise false.

validateEmailWithReason(email: string): true | string
Returns true if valid, otherwise a descriptive error message explaining why the email is invalid.

## Internationalized Domain Support

This module uses the punycode package to convert Unicode domain names to ASCII format.

```js
const punycode = require("punycode/");
```

---

## Testing

Run tests using Jest:

```bash
npm test
```

---

## Contribution

Pull requests are welcome! If you find a bug or want to suggest improvements, feel free to open an issue.

---

## License

---

MIT © Abhishek Sharma
