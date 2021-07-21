// // # https://en.wikipedia.org/wiki/Luhn_algorithm#Example_for_computing_check_digit

// // # Sample:

// // # Validate 79927398713
// 7992739871

// // # (Step 0) 7  9  9  2  7  3  9  8  7  1  3
// // # (Step 1) 7  18 9  4  7  6  9  16 7  2  3
// // # (Step 2) 7 (1+8 = 9) 9       (1+6 = 7)
// // 7 9 9 4 7 6 9 7 7 2 3
// // # (Step 3) 7+9+9+4+7+6+9+7+7+2+3 = 70


// // # 1. Double every second digit, from the rightmost:
// // #     (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
// // # 2. Sum all the individual digits (digits in parentheses are the products from Step 1):
// // #     3 (the check digit) + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 7 = 70.
// // # 3. If the sum is a multiple of 10, the account number is possibly valid.
// // #     Note that for 79927398713, 3 is the only valid digit that produces a sum (70)
// // #     that is a multiple of 10.


// // # f(number) -> true/false

// // # f("79927398713") -> true
// // # f("79927398712") -> false


// 79927398713
function luhn(stringNumber) {
    const length = stringNumber.length;
    const data = [];
    let number;
    let j = 0;
    let sum = 0;

    for(i = length - 1; i >= 0; i--) {
      j++;

      if(j % 2 === 0) {
        number = parseInt(stringNumber[i]) * 2;

        if(number > 9) {
          number =  number - 9;
        }
      } else {
        number = parseInt(stringNumber[i]);
      }

      data.unshift(number);
      sum += number;
    }

    return sum % 10 === 0 ? true : false;
}

function luhnGenerator(stringNumber) {
  const length = stringNumber.length;
  if(luhn(stringNumber)) {
    return stringNumber;
  }

  for(i = 0; i < 10; i++) {
    stringNumber[length - 1] = i;
    if(luhn(stringNumber)) {
      return stringNumber;
    }
  }
}

// console.log(luhn('79927398713'));
// console.log(luhn('79927398712'));
// console.log(luhn('79927398710'));
// console.log(luhn('79927398711'));

// console.log(luhn('686627080'));

// Input: Math.round(Math.random() * 10 ** 10)
// Output: valid number based on Luhn's Algorithm

const rand = Math.round(Math.random() * 10 ** 10)


console.log(luhnGenerator(rand));
console.log(luhn(luhnGenerator(rand)));
