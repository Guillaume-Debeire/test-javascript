# Suite

## Méthodes des arrays

### map

### filter

### find

## ES6

### let et const

`let` et `const` ont le meme role que `var`, celui de créer une variable.

Tout comme `var`, la portée de la variable dépendra de là où on lécrit, si on écrit notre variable en dehors de toute fonction la portée sera globale. Si on écrit notre variable dans une fonction, la portée sera locale à la fonction.

La différence c'est que `let` et `const` ont toutes deux une portée de block contrairement à `var`.

```js
// portée globale
var toto = 3;
let tata = 4;
const titi = 6;

function test() {
// portée locale à la fonction
    var tutu = 7;
    let truc = 8;
    const much = 9;
}

if (true) {
    // la var est globale
    var machin = 0;
    // la let et la const sont limitées au block
    let bidule = 52;
    const chouette = 53;
}

// erreur : la let n'est pas accessible en dehors du block
// console.log(bidule);
```

La différence entre `let` et `const` est que l'ont peut réassigner une `let` mais pas une `const`, une `const` est constante, on aura un message d'erreur si on essaye de le faire

```js
let truc = 2;
truc = 3;

const machin = 4;
// réassigner la const donne une erreur
machin = 5;

// On peut tout à fait modifier le contenu d'un objet ou d'un tableau, réassigner une propriété ce n'est pas la même chose que réassigner la constante dans sa globalité
const obj = {};
obj.age = 30;
```

### Template strings

### Fonctions fléchées
