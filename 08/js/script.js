/*

Coin-coin !
=================

On a récupéré un tableau qui contient des animaux, on voudrait le décomposer pour stocker chaque animal dans une variable

Objectifs
---------
Créer une variable pour chaque animal du tableau (utiliser le nom de l'animal pour nommer la variable), dans laquelle on stocke les informations de cet animal... Et écrire ça en une seule ligne !

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
*/

const animaux = [
    {
        name: 'canard',
        type: 'oiseau',
        aliments: ['insecte', 'poisson'],
        cri: 'coin',
    },
    {
        name: 'chat',
        type: 'félin',
        aliments: ['croquette', 'pâtée', 'souris'],
        cri: 'miaou',
    },
    {
        name: 'lion',
        type: 'félin',
        aliments: ['zèbre', 'antilope', 'buffle'],
        cri: 'rooooaaaarrrr',
    },
    {
        name: 'mouton',
        type: 'ovin',
        aliments: ['herbe'],
        cri: 'bêêê',
    }
];

// const canard = animaux[0];
// const chat = animaux[1];
// const lion = animaux[2];
// const muton = animaux[3];

// Quand on décompose un tableau ce qui compte c'est l'ordre
const [canard, chat, lion, mouton] = animaux;

// On est pas obligés de tout récupérer on pourrait prendre uniquement la première valeur par exemple
const [canard] = animaux;