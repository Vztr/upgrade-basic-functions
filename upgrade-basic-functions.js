//////// ITERACION 1 ////////

//------------------- 1.1

let result;

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        result = numberOne
    } else {
        result = numberTwo
  }
}

//------------------- 1.2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = param[0];

  for (let i = 0; i < longestWord.length; i++) {
      if(param[i] && (param[i].length > longestWord.length)) {
          longestWord = param[i];
      } 
    }    
  console.log(findLongestWord);
}

findLongestWord(avengers);

//------------------- 1.3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) { // Recorremos el array
    result += array[i] // añadimos los valores que cogemos del array a "result", y a la vez sumamos los elementos guardados en cada iteración del bucle
  }
  return result // Devolvemos el resultado cuando se haya recorrido todo el bucle y esten almacenadas en "result" todos los elementos sumados.
}

console.log(sumAll(numbers)); // Invocamos la función pasandole un parámetro.

//------------------- 1.4

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
  let average = sumAll(array) / array.length; // Invocamos una función dentro de otra función
  return average
}

//------------------- 1.5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === "string") {
      count += array[i].legth
    } else {
      count += array[i]
    }
  }
  return count
}

console.log(averageWord(mixedElements));

//------------------- 1.6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potato',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    let newElements = [];
    for (let i = 0; i < array.length; i++) {
      if(!newElements.includes(array[i])) {
        newElements.push(array[i])
      }
    }
    return newElements;
  }

  console.log(removeDuplicates(duplicates));

  //------------------- 1.7

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array) {
    let result;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === name) {
        return i
      }   
    }
    return "No has resultado";
  }

  console.log(finderName(nameFinder, "Logan"));

    //------------------- 1.8

    const counterWords = [
        'code',
        'repeat',
        'eat',
        'sleep',
        'code',
        'enjoy',
        'sleep',
        'code',
        'enjoy',
        'upgrade',
        'code'
      ];
      function repeatCounter(param) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
          if(array[i] in count) {
            count[array[i]]++
          } else {
            count[array[i]] = 1
          }
        }
        return count
      }