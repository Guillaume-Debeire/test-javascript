/*
Un peu d'épices...
==================
Nous allons afire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

Objectifs
---------
- Faire une fonction : sayHelloToUser
- elle prend en paramètre le nom du user
- elle retourne une fonction
- la fonction retournée doit prendre un paramètre `lang`

WHAAAAAAT ?!

Par exemple:
    const sayHelloToJohn = sayHelloToUser({ 'john' });
    sayHelloToJohn('es'); // => renvoie 'Ola John Doe'
Ou bien :
    const sayHelloToToto = sayHelloToUser('toto');
    sayHelloToToto('fr'); // renvoie 'Bonjour Toto Dupont'

On pourra utiliser un switch dans la fonction retournée pour déterminer le message en fonction de la langue

Notions
-------
- JS : portée de variable / closure / currying
*/

const users = [
    {
        firstname: 'John',
        lastname: 'Doe',
        login: 'jdoe',
    },
    {
        firstname: 'Toto',
        lastname: 'Dupont',
        login: 'toto',
    },
];

// function sayHelloToUser({ firstname, lastname }) {
//     return function(lang) {
//         switch (lang) {
//             case 'es':
//                 console.log(`Ola ${firstname} ${lastname}`);
//                 break;
//             case 'en':
//                 console.log(`Hello ${firstname} ${lastname}`);
//                 break;
//             default:
//                 console.log(`Bonjour ${firstname} ${lastname}`);
//         }
//     };
// }

const sayHelloToUser = ({ firstname, lastname }) => {
    (lang) => {
        switch (lang) {
            case 'es':
                console.log(`Ola ${firstname} ${lastname}`);
                break;
            case 'en':
                console.log(`Hello ${firstname} ${lastname}`);
                break;
            default:
                console.log(`Bonjour ${firstname} ${lastname}`);
        }
    };
}

const sayHelloToJohn = sayHelloToUser(users[0]);
const sayHelloToToto = sayHelloToUser(users[1]);

sayHelloToJohn('es');
sayHelloToJohn('en');
sayHelloToToto();

// La currification/currying consiste à ne pas écrire une fonction à plusieurs paramètres, mais plutot plusieurs fonctions à 1 paramètre, chaque fonction en retournant une autre.


