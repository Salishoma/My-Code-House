
const addBinary = (a, b) => {
  let maxLength = Math.max(a.length, b.length);
  let dot = 0, r = "";
  for (let i = 0; i < maxLength; i++) {
      const sum = dot + (a[a.length - i - 1] | 0) + (b[b.length - i - 1] | 0);  //  undefined | 0  ->  0
      r = sum % 2 + r;
      dot = sum >> 1;
  }
  return dot ? "1" + r : r;
}
addBinary("1010", "1011")