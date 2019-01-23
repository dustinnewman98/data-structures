function rec_is_palindrome(str, start, end) {
  if (str[start] !== str[end]) {
    return false;
  }

  if (start < end) {
    return rec_is_palindrome(str, start + 1, end - 1);
  }

  return true;
}

function is_palindrome(str) {
  const len = str.length;

  if (len === 0) {
    return true;
  }

  return rec_is_palindrome(str, 0, len - 1);
}

module.exports = is_palindrome;
