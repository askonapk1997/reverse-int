module.exports = function reverse (n) {
  const a = n.toString().replace(/\D/, '').split('');
  return a.reverse().join('');
}