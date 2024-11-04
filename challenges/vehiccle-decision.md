# Programming Challenge: [Vehicle Decision Helper][vehicle-decision]

## Introduction

In this exercise, you will write some code to help you prepare to buy a vehicle. You will implement functions to determine whether you need a driver's license, to choose between two vehicles, and to estimate the price of a used vehicle. This challenge will help you practice comparison operators, conditionals, and basic function creation in JavaScript.

## Comparison

In JavaScript, numbers can be compared using the following relational and equality operators.

| Comparison                | Operator  |
|---------------------------|-----------|
| Greater than              | `a > b`   |
| Greater than or equals    | `a >= b`  |
| Less than                 | `a < b`   |
| Less than or equals       | `a <= b`  |
| (Strict) Equals           | `a === b` |
| Not (strict) equals       | `a !== b` |

The comparison result is always a boolean value: `true` or `false`.

```javascript
1 < 3; // => true
2 !== 2; // => false
1 === 1.0; // => true
```

All numbers are floating points, so this is different syntax for the exact same value.

In JavaScript, the comparison operators can also be used to compare strings. In that case, a dictionary (lexicographical) order is applied.

```javascript
'Apple' > 'Pear'; // => false
'a' < 'above'; // => true
'a' === 'A'; // => false
```

## Conditionals

A common way to conditionally execute logic in JavaScript is the `if` statement. It consists of the `if` keyword, a condition wrapped in round brackets, and a code block wrapped in curly brackets. The code block will only be executed if the condition evaluates to true.

```javascript
if (condition) {
  // code that is executed if "condition" is true
}
```

It can be used stand-alone or combined with the `else` keyword.

```javascript
if (condition) {
  // code that is executed if "condition" is true
} else {
  // code that is executed otherwise
}
```

To nest another condition into the `else` statement, you can use `else if`.

```javascript
if (condition1) {
  // code that is executed if "condition1" is true
} else if (condition2) {
  // code that is executed if "condition2" is true but "condition1" was false
} else {
  // code that is executed otherwise
}
```

## Instructions

### Determine if you will need a driver's license
Some kinds of vehicles require a driver's license to operate them. Assume only the kinds 'car' and 'truck' require a license; everything else can be operated without a license.

Implement the `needsLicense(kind)` function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

```javascript
needsLicense('car'); // => true
needsLicense('bike'); // => false
```

### Choose between two potential vehicles to buy
You evaluate your options of available vehicles. You manage to narrow it down to two options, but you need help making the final decision. Implement the function `chooseVehicle(option1, option2)` that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.

```javascript
chooseVehicle('Wuling Hongguang', 'Toyota Corolla'); // => 'Toyota Corolla is clearly the better choice.'
chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'); // => 'Volkswagen Beetle is clearly the better choice.'
```

### Calculate an estimation for the price of a used vehicle
Now that you made your decision, you want to ensure you get a fair price at the dealership. Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume:

- If the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new.
- If it is more than 10 years old, it costs 50%.
- If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.

Implement the `calculateResellPrice(originalPrice, age)` function that applies this logic using `if`, `else if`, and `else`. It takes the original price and the age of the vehicle as arguments and returns the estimated price at the dealership.

```javascript
calculateResellPrice(1000, 1); // => 800
calculateResellPrice(1000, 5); // => 700
calculateResellPrice(1000, 15); // => 500
```