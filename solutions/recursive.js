export const fibRecursive = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
};
