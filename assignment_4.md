# Assignment - 4

### 1. Given a string “Azad Ram Madiha Yash”. Return a string with the first letter of every word from the string. (Use built in methods).

Ans:

```
let str = "Azad Ram Madiha Yash";
let wordArray = str.split(' ');
let LetterArray = wordArray.map(word => word.charAt(0));
let firstLetterString = LetterArray.join('');
console.log(firstLetterString); // Output: ARMJY

```
_____
### 2. Given an array [1, -4, 12, 0, -3, 29, -150]. Calculate the sum of all positive numbers (use built in array methods).

Ans:

```
const array = [1, -4, 12, 0, -3, 29, -150];
var sum=0;
let result  = array.filter(array => array > 0);

result.forEach(val => {
    sum += val;
  });

console.log(sum);
```
_____
### 3. Given an array [1, 2, 3, 4, 5]. Create a new array with the square of each element(use built in array methods).

Ans :

```
const arr = [1, 2, 3, 4, 5];
const newarray = arr.map((x) => x ** 2);
console.log(newarray); 

```
_____
### 4. Given an array [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name: 'Vice-president James' }, { id: 3016, name: 'House-captain Otis' },  { id: 4818, name: 'Prefect Finneas' }]. Create an array containing just the id of every individual. (write two solution one using iterator and another using built-in method)

Ans: 

- Solution with iterator : 
```
const array = [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name: 'Vice-president James' }, { id: 3016, name: 'House-captain Otis' }, { id: 4818, name: 'Prefect Finneas' }];

const idArray = [];
for (let i = 0; i < array.length; i++) {
  idArray.push(array[i].id);
}

console.log(idArray); 

```

- Solution with Built-in : 

```
const array = [{ id: 2100, name: 'President Jacqueline' }, { id: 2114, name: 'Vice-president James' }, { id: 3016, name: 'House-captain Otis' }, { id: 4818, name: 'Prefect Finneas' }];

const idArray = array.map((item) => item.id);

console.log(idArray); 

```
_______