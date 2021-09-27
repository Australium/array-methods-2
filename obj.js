"use strict";

const users = [
  {
    name: "Bob",

    surName: 'Dilan',

    age: 27,

    address: {
      country: "USA",

      city: "LA",
    },

    marks: [2, 3, 5, 4, 2, 3, 1, 5],
  },

  {
    name: "July",

    age: 21,

    address: {
      country: "Ukraine",

      city: "Kiev",
    },

    marks: [4, 4, 5, 4, 3, 4, 3, 5],
  },

  {
    name: "Monya",

    age: 15,

    address: {
      country: "Ukraine",

      city: "Odessa",
    },

    marks: [5, 1, 5, 1, 5, 1, 5, 1],
  },

  {
    name: "Vsevolod",

    surName: 'Berezovskiy',

    age: 19,

    address: {
      country: "Ukraine",

      city: "Lviv",
    },

    marks: [3, 4, 5, 3, 1, 2, 4, 6],
  },
  {
    name: "qqqq",

    surName: 'wwww',

    age: '1',

    address: {
      country: "sdfsdf",

      city: "dsfdsf",
    },

    marks: [3, 4, 5, 3, 1, 2, 4, 6],
  },
];

console.log(users);

let isNotAdult = users.filter(({age}) => age < 18);

let foreignStudent = users.filter(({address: {country}}) => country !== "Ukraine");

console.log(isNotAdult);
console.log(foreignStudent);

let newUsers = users.map(item => {
    return {
      ...item,
      isAdult: item.age >= 18,
      averageMark: (item.marks.reduce((acc, el) => {
            return acc + el;
      }))/item.marks.length,
    }
  });

console.log(newUsers);

let averageMark = (users.reduce((acc, elem) => {
  return acc + (elem.marks.reduce((ac, el) => {
    return ac + el;
},0))/elem.marks.length;
},0))/users.length;

console.log(averageMark);

let addresses = {
  countries: users.map(({address:{country}}) => country),
  cities: users.map(({address:{city}}) => city),
};

console.log(addresses);

let getArrayForNames = (getArr) => {
    return getArr.map(item => {
        return {
            firstName: item.name,
            lastName: item.surName || 'Doe',
        }
    })
};

let arrayOnlyNames = getArrayForNames(users);

console.log(arrayOnlyNames);

let getArrayForElements = (getArray) => {
  let newArray = getArray.filter(item => {
      if (Object.keys(item).length > 4) return {...item};
  })
  if (newArray[0] !== undefined) return console.log(newArray);
};

getArrayForElements(users);
getArrayForElements(arrayOnlyNames);

let getArrayForObjectValues = (arr) => {
  return arr.filter(item => {
    let filteredArray = Object.values(item);
    return (
    filteredArray.some(e => typeof e === 'string' ) &&
    filteredArray.some(e => typeof e === 'number')
    );
  });
};

console.log(getArrayForObjectValues(users));
console.log(getArrayForObjectValues(arrayOnlyNames));