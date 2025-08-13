const punycode = require("punycode/");

function normalizeEmail(email) {
  const [local, domain] = email.split("@");
  if (!local || !domain) return null;
  const asciiDomain = punycode.toASCII(domain);
  return `${local}@${asciiDomain}`;
}

function validateEmail(email) {
  const normalized = normalizeEmail(email);
  if (!normalized) return false;

  const regex =
    /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_-][A-Za-z0-9]+)*\.[a-z]{2,8}(\.[a-z]{2,8})?$/;
  return regex.test(normalized);
}

function validateEmailWithReason(email) {
  const normalized = normalizeEmail(email);
  if (!normalized) return "Missing '@' or invalid domain";

  const [local, domainFull] = normalized.split("@");
  if (!local || !domainFull) return "Invalid structure";

  if (/^[._%+-]/.test(local) || /[._%+-]$/.test(local))
    return "Local part starts or ends with special character";

  if (/[\.\-_]{2,}/.test(local))
    return "Local part has consecutive special characters";

  const domainParts = domainFull.split(".");
  if (domainParts.length < 2 || domainParts.length > 3)
    return "Domain must have 2 or 3 segments";

  const tld = domainParts[domainParts.length - 1];
  if (!/^[a-z]{2,8}$/.test(tld)) return "Invalid top-level domain";

  const regex =
    /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_-][A-Za-z0-9]+)*\.[a-z]{2,8}(\.[a-z]{2,8})?$/;
  if (!regex.test(normalized)) return "Invalid email format";

  return true;
}

module.exports = {
  validateEmail,
  validateEmailWithReason,
};
