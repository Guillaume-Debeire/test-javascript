/*
Un peu d'épices...
==================
Nous allons afire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

Objectifs
---------
- Faire une fonction : sayHelloToUser
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

function sayHelloToUser({ firstname, lastname }) {
    console.log(firstname, lastname);
    return function() {
        console.log('je teste');
    };
}

const sayHelloToJohn = sayHelloToUser(users[0]);
const sayHelloToToto = sayHelloToUser(users[1]);

sayHelloToJohn(); 
