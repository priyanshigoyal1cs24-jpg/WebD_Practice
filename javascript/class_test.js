// Q1. What will be the output?

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);

// A. null, number, array
// B. object, number, object
// C. object, NaN, array
// D. undefined, number, object

// Answer: B. object, number, object

// Explanation:
// typeof null returns "object" due to historical JavaScript behavior.
// typeof NaN returns "number" because NaN is a special numeric value.
// typeof [] returns "object" because arrays are objects in JavaScript.


// Q2. Predict the output.

console.log(2 + "203");
console.log(403 - "203");
console.log(2 * "12abc");

// A. 205, 200, 24
// B. 205, 200, NaN
// C. NaN, 200, NaN
// D. 2203, 403203, 24

// Answer: 2203, 200, NaN
// Note: None of the given options is completely correct.

// Explanation:
// + joins the number and string, producing "2203".
// - converts "203" to a number, producing 200.
// "12abc" cannot be converted to a valid number, so the result is NaN.


// Q3. Which statement about let, const, and var is correct?

// A. var is block-scoped.
// B. let can be redeclared in the same scope without error.
// C. A const object cannot have its properties modified.
// D. let and const are block-scoped, while var is function-scoped.

// Answer: D

// Explanation:
// var is function-scoped.
// let and const are block-scoped.
// A const object can have its properties modified,
// but the variable cannot be reassigned.


// Q4. What is the output?

let score = 12;

if (score > 10) {
    var result = "Pass";
    let status = "Eligible";
}

console.log(result);
// console.log(status);

// A. Pass, Eligible
// B. Pass, followed by a ReferenceError
// C. ReferenceError, ReferenceError
// D. undefined, undefined

// Answer: B

// Explanation:
// result is declared with var and is accessible outside the if block.
// status is declared with let and is accessible only inside the if block.
// Uncomment console.log(status) to see the ReferenceError.


// Q5. Which loop is most suitable for iterating over array values?

// A. for...in
// B. for...of
// C. if...else
// D. switch

// Answer: B. for...of

// Explanation:
// for...of iterates over the values of an array.

const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}


// Q6. What is the difference between return and console.log()?

// A. Both return values to the caller.
// B. console.log() returns the calculated result.
// C. return sends a value back to the caller; console.log() displays a value.
// D. return can only be used in arrow functions.

// Answer: C

// Explanation:
// return sends a value back from a function.
// console.log() displays a value in the console.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Q7. What does the rest parameter do?

// A. Converts all arguments into a string.
// B. Collects the arguments into an array.
// C. Expands an existing array into arguments.
// D. Allows only one argument.

// Answer: B

// Explanation:
// The rest parameter collects multiple arguments into an array.

function calculateTotal(...prices) {
    return prices.length;
}

console.log(calculateTotal(100, 200, 300));


// Q8. Which statement about arrow functions and this is correct?

// A. Arrow functions always bind this to the calling object.
// B. Regular functions always bind this to the object in which they are defined.
// C. Arrow functions inherit this from their surrounding lexical context.
// D. Arrow functions cannot access object properties.

// Answer: C

// Explanation:
// Arrow functions do not have their own this.
// They inherit this from their surrounding lexical context.

const student = {
    name: "Piyush",

    showName() {
        console.log(this.name);
    }
};

student.showName();

// Q9. Operators and Type Coercion

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 2);
console.log(Boolean("false"));

// Answer:
// 52
// 3
// 3
// true

// Explanation:
// "5" + 2 joins the string and number.
// "5" - 2 converts the string to a number.
// true becomes 1, so 1 + 2 = 3.
// "false" is a non-empty string, so Boolean("false") is true.


// Q10. Scope and Variable Declarations

var amount = 100;

function calculate() {
    var amount = 200;
    let discount = 20;

    if (true) {
        var amount = 300;
        let discount = 50;

        console.log(amount, discount);
    }

    console.log(amount, discount);
}

calculate();
console.log(amount);

// Answer:
// 300 50
// 300 20
// 100

// Explanation:
// var is function-scoped, so amount becomes 300 inside calculate().
// The inner discount is block-scoped and has the value 50.
// Outside the if block, discount is 20.
// The global amount remains 100.


// Q11. Functions and Return Values

function calculatePrice(price, quantity) {
    console.log(price * quantity);
}

const result = calculatePrice(100, 3);
console.log(result);

// Answer:
// 300
// undefined

// Explanation:
// console.log() displays the calculated price.
// The function does not return a value, so result is undefined.


// Corrected function:

function calculatePriceCorrect(price, quantity) {
    return price * quantity;
}

const finalResult = calculatePriceCorrect(100, 3);
console.log(finalResult);

// Output: 300


// Q12. Array Mutation

const products = ["Milk", "Bread", "Rice"];

products[1] = "Eggs";
products.push("Oil");

console.log(products);
console.log(products.length);

// Answer:
// ["Milk", "Eggs", "Rice", "Oil"]
// 4

// Explanation:
// products[1] replaces Bread with Eggs.
// push() adds Oil to the array.
// const prevents reassignment, not modification of array contents.


// Q13. Object Methods and this

const employee = {
    name: "Aman",
    salary: 30000,

    showDetails() {
        console.log(this.name, this.salary);
    }
};

employee.showDetails();

// Answer: Aman 30000

// Explanation:
// During employee.showDetails(), this refers to employee.
// Therefore, this.name is Aman and this.salary is 30000.


// Q14. Rest Parameters and Spread Syntax

function addNumbers(...numbers) {
    return numbers.length;
}

const values = [10, 20, 30, 40];

console.log(addNumbers(values));
console.log(addNumbers(...values));

// Answer:
// 1
// 4

// Explanation:
// addNumbers(values) passes the entire array as one argument.
// addNumbers(...values) expands the array into four arguments.
// The rest parameter collects the arguments into an array.

// Q15. Fix the Variable Scope Issue

if (true) {
    let message = "Order placed successfully";
}

// console.log(message);

// Answer: ReferenceError

// Explanation:
// message is declared inside the if block using let.
// It cannot be accessed outside that block.


// Corrected Code:

let message;

if (true) {
    message = "Order placed successfully";
}

console.log(message);

// Output: Order placed successfully


// Q16. Fix the Shopping Cart Calculation

function calculateCartTotal(...prices) {
    let total = 0;

    for (let i = 0; i <= prices.length; i++) {
        total += prices[i];
    }

    return total;
}

// console.log(calculateCartTotal(100, 200, 300));

// Original output: NaN

// Explanation:
// The loop uses <= and accesses one extra array index.
// That index contains undefined.
// Adding undefined to a number produces NaN.


// Corrected Code:

function calculateCartTotalCorrect(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

console.log(calculateCartTotalCorrect(100, 200, 300));

// Output: 600


// Q17. Fix the Object Method

const user = {
    userName: "Rahul",

    showName: () => {
        console.log(this.userName);
    }
};

// user.showName();

// Explanation:
// Arrow functions inherit this from their surrounding context.
// Therefore, this does not refer to the user object here.


// Corrected Code:

const correctUser = {
    userName: "Rahul",

    showName() {
        console.log(this.userName);
    }
};

correctUser.showName();

// Output: Rahul

// Arrow functions are useful for callbacks when you want
// to preserve this from the surrounding context.


// Q18. Type Coercion — Predict the Output

console.log([] + []);
console.log([] + {});
console.log("5" - -"2");
console.log(null + 1);

// Answer:
// ""
// "[object Object]"
// 7
// 1

// Explanation:
// Empty arrays convert to empty strings.
// An ordinary object converts to "[object Object]".
// "5" - -"2" becomes 5 - (-2), which equals 7.
// null converts to 0 in numeric operations.


// Q19. Scope and Hoisting

console.log(a);

var a = 10;

console.log(a);

// Answer:
// undefined
// 10

// Explanation:
// var declarations are hoisted and initialized with undefined.
// The assignment a = 10 happens when execution reaches that line.


// Temporal Dead Zone (TDZ)

// Uncomment these two lines to test the ReferenceError:
// console.log(b);
// let b = 20;

// Explanation:
// let variables cannot be accessed before initialization.
// Accessing b before initialization throws a ReferenceError.