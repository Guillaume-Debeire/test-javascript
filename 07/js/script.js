/*

Mékicé ?
====================

Pfiou, ces gens qui prennent des pseudos, pas facile de s'y retrouver ! Mais c'est qui "paldado" ??

Objectifs
---------
Créer une fonction `findUser` qui à partir d'un `login` et d'un tableau `users` retourne l'utilisateur qui a ce login.

Notions
-------
- Array : ce serait cool de pouvoir chercher, ou plutôt _trouver_... (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)

*/

const data = [
    {
        name: 'Claire',
        login: 'La_m0uche',
    },
    {
        name: 'Delphine',
        login: 'Josiane',
    },
    {
        name: 'Emilie',
        login: 'Lili',
    },
    {
        name: 'Cédric',
        login: 'x__{^^}__x',
    },
    {
        name: 'Pierre',
        login: 'paldado',
    },
    {
        name: 'Sylvain',
        login: 'navilsy',
    },   
];

// function findUser(login, users) {

// };

function findUser(login, users) {
    return users.find((currentUser) => currentUser.login === login);
};

const paldadoUser = findUser('paldado', data);
console.log(paldadoUser);