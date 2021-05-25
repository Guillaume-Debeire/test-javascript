# Suite

## Méthodes des arrays

### map

`map` s'éxecute sur un tableau d'origine et retourne un nouveau tableau qui contiendra autant d'élements que le tableau d'origine.

Chaque fois qu'on a la problématique de transposer un tableau, cad créer un tableau en fonction des valeurs d'un tableau d'origine, on pourra utiliser `map`.

```js
const numbers = [1, 2, 42, 123];

function calculDouble(number) {
    return number * 2;
}

const doubles = numbers.map(calculDouble);
```

### filter

Filter sert à filtrer les valeurs d'un tableau, on obtient un nouveau tableau contenant une partie des valeurs initiales

On lui passe en argument une fonction callback qui sera exécutée pour chaque valeur du tableau, elle acceptera en paramètre la valeur courante et l'index courant

Pour chaque valeur du tableau d'origine, si la fonction de rappel renvoie true on garde la valeur, si on revoie false, on ne garde pas la valeur

```js
function isBig(value) {
    return value > 20;
}

const numbers = [5, 15, 25, 35];

const bigNumbers = numbers.filter(isBig);
console.log(bigNumbers); // [25, 35]
```

### find

Find sert à trouver **une** valeur dans un tableau

Comme pour les méthodes précédentes on passe une fonction callback qui accepte en paramètre la valeur courante et éventuellement l'indice courant

La fonction callback doit renvoyer true ou false, dès qu'elle renvoie true pour une valeur, c'est cette valeur qui est retournée par le find

```js
function isBig(value) {
    return value > 20;
}

const numbers = [5, 15, 25, 35];

const bigNumber = numbers.find(isBig);
console.log(bigNumber); // [25, 35]
```

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

### Template strings / Template litterals / Littéraux de gabarits / Chaînes de charactères entre magic quotes

[Doc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits)

On connait les simples ou les doubles quotes pour écrire une chaîne de caractères.

```js
const prenom = 'Guillaume';
const nom = 'Debeire';
```

On peut aussi délimiter des chaines entre ` ce qu'on appelle magic quote ou backticks

```js
const name = 'Guillaume Debeire';
```

Il y a 3 avantages :

- On peut mettre des retours à la ligne

```js
const presentation = `Coucou,
comment ça va ?`;
```

- On peut mettre des expression qui seront interprétées entre `${}`

```js
const age = 30;
// C'est comme faire une concaténation avec + mais ainsi on a pas besoin de sortir sans arrêt de la chaine
console.log(`Dans 1° ans j'aurai ${age + 10} ans`);
```

- Il existe un troisième avantage avec ce qu'on appelle les gabarits étiquetés, mais ça ne nous intéresse pas aujourd'hui.

### Fonctions fléchées

En js on peut écrire nos fonctions de 2 manières.

- Déclaration de fonction

```js
function sayHello() {
    return 'hello';
}

sayHello();
```

- Expression de fonction

```js
const sayHello = function() {
    return 'hello';
}

sayHello();
```

Avec ES6, l'expression de fonction peut être réécrite sous forme d'expression de fonction fléchée.

```js
const sayHello = () => {
    return 'hello';
}

sayHello();
```

Pour faire une fonction fléchée on enlève le mot function et on met à la place une grosse flèche ou fat arrow entre les parenthèses des paramètres et le corps de la fonction.

il est **possible** d'alléger encore plus.

- On peut omettre les accolades du corps de la fonction ET le return SI et seulement SI la seule instruction de notre fonction est un return

```js
const isOld = (age) => age > 50;

isOld(40);
```

- On peut omettre les parenthèses autour du paramètre SI et seulement SI il y en a 1 et 1 seul (ni 0 ni 2 ou plus)

```js
const isOld = age => age > 50;

isOld(40);
```

- Autres exemples

```js
const getFullName = (firstname, lastname) => `${firstname} ${lastname}`;

getFullName('Guillaume', 'Debeire'); // Guillaume Debeire

// dans le cas où on retourne directement un objet on est obligés de l'entourer de parenthèses sinon l'interpréteur ne comprend pas la signification des accolades
const getObjet = () => ({
    name: 'toto',
    age: 30
});
```
