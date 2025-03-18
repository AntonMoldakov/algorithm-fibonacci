# algorithm-fibonacci

Fibonacci algorithms and benchmarks

### Getting started

`npm install`

### How to run benchmark

`npm run benchmark`

### Benchmark results

Running benchmark suite Fib

- cycle Recursive x 16,775 ops/sec ±1.03% (100 runs sampled)
- cycle Recursive and Cache x 2,932,244 ops/sec ±0.43% (98 runs sampled)
- cycle Array x 16,638,917 ops/sec ±0.68% (97 runs sampled)
- cycle Integers x 83,505,147 ops/sec ±2.84% (91 runs sampled)
- complete Integers won

#### Top-Down

1. Recursive

   - Memory: high (due to deep call stack)
   - Time complexity: O(2^n)
   - Performance: 16,775 ops/sec

2. Recursive and Cache
   - Memory: medium (due to memoization array)
   - Time complexity: O(n)
   - Performance: 2,932,244 ops/sec

#### Bottom-Up

1. Array

   - Memory: medium (due to dp array)
   - Time complexity: O(n)
   - Performance: 16,638,917 ops/sec

2. Integers
   - Memory: constant
   - Time complexity: O(n)
   - Performance: 83,505,147 ops/sec
