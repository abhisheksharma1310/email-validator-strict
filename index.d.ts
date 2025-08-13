/**
 * Validates an email address using strict rules and internationalized domain support.
 * @param email - The email address to validate.
 * @returns `true` if valid, otherwise `false`.
 */
export function validateEmail(email: string): boolean;

/**
 * Validates an email address and returns either `true` or a descriptive error message.
 * @param email - The email address to validate.
 * @returns `true` if valid, otherwise a string describing the validation error.
 */
export function validateEmailWithReason(email: string): true | string;
