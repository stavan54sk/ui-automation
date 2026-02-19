export function randomString(length = 6) {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function sanitizePhone(phone = '') {
  // remove any character that is not a digit, plus, hyphen, dot or space
  let cleaned = String(phone).replace(/[^\d+\-\.\s]/g, '');
  // remove any plus signs not at the start
  cleaned = cleaned.replace(/(?!^)\+/g, '');
  // collapse multiple spaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  return cleaned;
}

export default { randomString, sanitizePhone };
