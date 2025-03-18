export const fibArray = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
