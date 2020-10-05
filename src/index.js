
module.exports = function towelSort (matrix) {
  const res = !Array.isArray(matrix) ? [] :
              matrix
                .map((x, index) => index & 1 ? x.reverse() : x)
                .flat();
  return res;
}