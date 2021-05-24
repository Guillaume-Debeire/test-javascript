const data = [
    {
        firstname: 'Marge',
        lastname: 'Simpson',
        gender: 'Women',
        age: 34,
    },
    {
        firstname: 'Ned',
        lastname: 'Flanders',
        age: 61,
    },
    {
        firstname: 'Charles Montgomery',
        lastname: 'Burns',
        age: 104,
    },
    {
        firstname: 'Waylon',
        lastname: 'Smithers',
        age: 36,
    },
];

// const characters = [];

// data.forEach(function(originalCharacter) {
//     const oneCharacter = {};
//     oneCharacter.name = originalCharacter.firstname + ' ' + originalCharacter.lastname;
//     oneCharacter.young = originalCharacter.age < 50;
//     characters.push(oneCharacter);
// });

const characters = data.map(function(originalCharacter) {
    const oneCharacter = {};
    oneCharacter.name = originalCharacter.firstname + ' ' + originalCharacter.lastname;
    oneCharacter.young = originalCharacter.age < 50;
    return oneCharacter;
});

console.log(data);
console.log(characters);

// for (let i = 0; i < data.length; i++) {
//     const oneCharacter = [];
//     oneCharacter.name = data[i].firstname + ' ' + data[i].lastname;
//     if (data[i].age < 50) {
//         oneCharacter.young = true;
//     } 
//     else {
//         oneCharacter.young = false;
//     }
//     characters.push(oneCharacter);
// }





// console.log(characters)

