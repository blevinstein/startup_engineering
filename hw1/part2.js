var fs = require('fs')

function main() {
  var outfile = "out2.txt"
  var f = fs.openSync(outfile, 'w')

  var primes = 0
  var current = 2
  while (primes < 100) {
    if (is_prime(current)) {
      fs.write(f,current + ",")
      primes++
    }
    current++
  }
}

// naive primality test
function is_prime(num) {
  for (var i=2; i<=Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

main()
