// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

function arrDoubled(arr) {
  return arr.map(x => x * 2);
}

console.log(arrDoubled(numbers));


// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

function arrMultiplied(arr, z) {
  return arr.map(x => x * z);
}

console.log(arrMultiplied(numbers, 3));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

function arrCountTwos (arr)
    {
        let num = 0;
        for (let i=0; i<arr.length; i++)
        {
            if (2 == arr[i])
                num++;
        }
        return num;
    }
console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfFirst (arr, num) {
  if (arr.includes(num)) {
    return arr.indexOf(num)
  } else {
    return -1
  }
}

console.log(arrIndexOfFirst(numbers, 23))

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfLast (arr, num) {
  return arr.lastIndexOf(num)
}

console.log(arrIndexOfLast(numbers, 2))

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

function reverseNumbers(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}
console.log(+(reverseNumbers(12345)));



// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

function findMinMax (arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `Maziausias: ${min}, Didziausias: ${max}`;
}

console.log(findMinMax(numbers));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

function checkForLetters(sentence, letter) {
 let count = 0;
 for (let i = 0; i < sentence.length; i++) {
   if (sentence.charAt(i) == letter) {
     count += 1;
   }
   
 } 
 return count;
}
  
console.log(checkForLetters('arabica von palama', 'a'));

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

const data = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", 10, 1];

function numArray(arr) {
    let cleanValue = arr.filter(val => typeof val == 'number');
    return cleanValue.sort(function(a, b) {
      return a - b;
    });
}

console.log(numArray(data));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

function checkIfAllSmaller(arr, max) {
    for (let i=0; i<arr.length; i++)
    {
        if (max > arr[i]) {
            return 'max';
    } else {
      return false;
    }
  }
}

let arr1 = [2, 7, 6, 9, 5];

console.log(checkIfAllSmaller(arr1, 19));
// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

let filteredByLetter = (arr, x) => arr.filter(y => y.includes(x));

console.log(filteredByLetter(citiesOfLithuania, 'K'));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

let notNum = 'Not a number';

function addition(a, b) {
  sum = a + b;
    if (typeof sum == 'number') {
      return sum
    } else {
      return notNum
    }
}
console.log(addition(3, 7));

function subtraction(a, b) {
  sum = a - b;
    if (typeof sum == 'number') {
      return sum
    } else {
      return notNum
    }
}
console.log(subtraction(3, 7));

function multiplication(a, b) {
  sum = a * b;
    if (typeof sum == 'number') {
      return sum
    } else {
      return notNum
    }
}
console.log(multiplication(3, 7));

function division(a, b) {
  sum = a / b;
    if (typeof sum == 'number') {
      return sum
    } else {
      return notNum
    }
}
console.log(division(3, 7));

function calculateValue(num1, num2, action) {
  if (action == 'addition') {
    return addition(num1, num2)
  } else if (action == 'subtraction') {
    return subtraction(num1, num2) 
  } else if (action == 'multiplication') {
    return multiplication(num1, num2) 
  } else if (action == 'division') {
    return division(num1, num2)
  } else {
    return 'cant do'
  }
}
console.log(calculateValue(2, 5, 'division'));

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.
