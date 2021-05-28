/*

Compression de user
========================

On a récupéré un objet représentatnt un utilisateur, il y a plein d'informations dedans et on en utilise seulement certaines, on voudrait récupérer seulement les informations dont on a besoin.

Objectifs
---------
Créer une variable `firstname` dans laquelle on stocke le nom de l'utilisateur, une varibale `login` pour son login... Et écrire ça en une seule ligne !

Puis renommer la variable `firstname` en `name`.

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
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

// const name = user.firstname;
// const login = user.login;
// console.log(name, login);

// pour identifier les valeurs qui nous interessent ce sont les noms des clés qui comptent, on est obligés de les respecter, on peut tout de même renommer lorsqu'on décompose.
const { login, firstname: name } = user;
console.log(login, name);