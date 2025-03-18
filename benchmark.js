import benchmark from 'benchmark';

import { fibRecursive } from './solutions/recursive.js';
import { fibRecursiveAndCache } from './solutions/recursive-and-cache.js';
import { fibArray } from './solutions/array.js';
import { fibIntegers } from './solutions/integers.js';

function runSuite(suite) {
  console.log('Running benchmark suite', suite.name);

  suite
    .on('cycle', function (event) {
      console.log('cycle', String(event.target));
    })
    .on('complete', function (event) {
      console.log('complete', this.filter('fastest').map('name') + ' won');
    })
    .run();
}

function fibTest() {
  const suite = new benchmark.Suite('Fib');

  suite
    .add('Recursive', function () {
      fibRecursive(20);
    })
    .add('Recursive and Cache', function () {
      fibRecursiveAndCache(20);
    })
    .add('Array', function () {
      fibArray(20);
    })
    .add('Integers', function () {
      fibIntegers(20);
    });

  runSuite(suite);
}

fibTest();
