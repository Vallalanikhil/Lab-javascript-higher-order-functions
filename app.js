//function 1:
function slice() {
    var modifiedFood = [
        "pizza",
        "burger",
        " fingerChips",
        "donuts",
        "springRoll",
    ];
    modifiedFood.slice(1, 4);
    console.log(modifiedFood);
}

//function 2:
function splice() {
    var modifiedFood = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    modifiedFood.splice(2, 0, "noodles", "icecream");
    // inserts at index 1
    console.log(modifiedFood);
}

//function 3:
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven() {
    var arr = [12, 324, 213, 4, 2, 3, 45, 4234];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // document.writeln(arr[i] + "<br />");
            console.log(arr[i]);
        }
    }
}
arr = [12, 324, 213, 4, 2, 3, 45, 4232];

function isPrime(arr) {
    return (
        "The prime numbers are: " +
        arr.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
            }
            return true;
        })
    );
}
//function 4:

function nonPrime(arr) {
    return (
        "The Non-prime numbers are: " +
        arr.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return true;
            }
            return false;
        })
    );
}
console.log(nonPrime(numberArray));
//function 5:
function isEven(num) {
    return num.filter((n) => n % 2 == 0);
}
console.log("Even Number by Lambda Expression: " + isEven(numberArray));
//function 6:Map
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers() {
    const map1 = myArray.map((x) => x * x);
    console.log(map1);
}

//Function 7: Reduce
const numbers = [2, 3, 5, 10];

function multiply(myArray) {
    return myArray.reduce(function (initial, item) {
        return initial * item;
    }, 1);
}
console.log("Multiplication=>" + multiply(numbers));