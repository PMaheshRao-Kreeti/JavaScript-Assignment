# Js Assignment - 2

### 1. If we execute this Javascript, what will the browser's console show?
```
var text = 'outside';
function logIt()
    {
        console.log(text);
        var text = 'inside';
    };

logIt();
```
Ans:

The console will show undefined as output because of the variable i defind below the console.log() and according to hoisting the declaration part move top of the scope first line not, the initialize value it . So the variable is declared for the console but it is not defined yet in the scope  .

______

### 2. Write a regular expression  to reverse the first and last name

Ans: 

```
let name = "Mahesh Rao";
console.log(name);

name= name.replace(/^(\w+)\s+(\w+)$/, '$2 $1');
console.log(name);          // Output: "Rao Mahesh"

```
______

### 3. Write a Regular expression to validate email address
```
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let email= prompt('Enter Email address : ');

console.log(regex.test(email));
```
______
### 4. Find the Output
```
 var x = 100;
    console.log(x);
     
    function test(){
        var x = 250;
        console.log(x);
     
        if (x > 100) {
            let x = 350;
            console.log(x);
        }
     
        console.log(x);
    }
     
    test();
    console.log(x);
```
______

### 5. What is the difference of output between these two expressions? Give your reasons for it:
```
12 == “12”
12 === “12”
Number(12) === 12
```
Ans:
- In 12 == "12" is will print **True** because before comparison the string is changed into number and then check it.
- In 12 === "12" is will print **False** because === operator also check the datatype.
- In Number(12) === 12 is will print **True** because 12 is a number.

______

### 6. What is NaN?

Ans:

In Js, NaN stands for "Not a Number".
It is a special value that represents an unrepresentable value resulting from an operation that should have returned a number, but failed to do so.

for example :-

 when we  divide number by string it will show NaN.
 