export const fibRecursiveAndCache = function (n) {
  const memo = {};

  const inner = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (typeof memo[n] === 'number') return memo[n];

    memo[n] = inner(n - 1) + inner(n - 2);
    return memo[n];
  };

  return inner(n);
};
