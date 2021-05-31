/*

Hello user
====================



Objectifs
---------
Ecrire une fonction `sayHelloToUser` qui permet de dire bonjour à un utilisateur en citant son prénom et son nom.

Cette fonction prend comme argument un objet qui représente l'utilisateur, et dans cette fonction on veut pouvoir utiliser directement les propriétés dont on a besoin sous forme de variables, mais sans avoir à déclarer ces variables dans le corps de la fonction... :pensif:

Note: pas de test ici (lol)
*/

const user = {
    country: 'France',
    firstname: 'Pierre',
    lastname: 'Aldado',
    email: 'p.aldado@oclock.io',
    phone: '0123456789',
    login: 'paldado',
    age: '32',
    lang: 'fr',
};

function sayHelloToUser({ firstname, lastname}) {
    console.log(`Hello ${firstname} ${lastname}`);
}

sayHelloToUser({
    firstname: 'toto',
    lastname: 'tata',
    age: 55,
});

sayHelloToUser(user);

const France = {
    language: 'french',
    capital: 'paris',
    hab: 7000000,
    surface: 100000,
}

function calculDensity({ hab, surface }) {
    return country.hab / country.surface;
};

calculDensity(France);
console.log(calculDensity(France ))