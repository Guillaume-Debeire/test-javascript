console.log("coucou")

var fruits = ["une pomme", "une fraise", "une poire"];
let titre = document.querySelector('h1');
let clic = 

// fonction qui sait afficher un fruit
// un fonction 
// - est réutilisable
// - est paramétrable
// - possède sa propre portée
function afficheFruit(listeDeFruits, numeroDuFruitAAfficher) {
    setTimeout(function() {
        console.log('Je mange ' + listeDeFruits[numeroDuFruitAAfficher]);
        console.log('et je me régale');
    }, numeroDuFruitAAfficher * 1000);
   
}
afficheFruit(fruits, 0);

// écrire le code permettant d'écrire les valeurs du tableau en console une à une
// une let a une portée de block
// function myForEach(monTableau, callback) {
//     for (var i = 0; i < monTableau.length; i++) {
//         callback(monTableau, i);
//     }
// }

// myForEach(fruits, afficheFruit);

fruits.forEach(function(value) {
    console.log('Je mange dans mon forEach une ' + value);
});

fruits.forEach(function(currentValue) {
    console.log('j\aime manger ' + currentValue);
});

fruits.forEach(afficheFruit);

// for (var i = 0; i < 3; i++) {
//     afficheFruit(fruits, i);
// }



// for (let i = 0; i < 3; i++) {
//     console.log('i dans la boucle ', i);
//     setTimeout(function() {
//         debugger;
//         console.log('i à l\'execution du callback du setTimeout', i);
//         console.log('Je mange une ' + fruits[i]);
//     }, 1000 * i);
// }



// fruits.forEach(function(value) {
//     console.log('Je mange dans mon forEach une ' + value);
// });

// un var ou une let définie dans une fonction aura une portée locale à la fonction



