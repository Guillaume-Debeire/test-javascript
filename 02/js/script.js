/*
Objectifs
---------
- Construitre une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
---------
- DOM : document.getElementByid / document.createElement / appendchild
- Array : forEach

*/

const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];



// function generateLi(parent, text) {
//     // Créer un li
//     const newLiElement = document.createElement('li');
//     // Ecrire du texte dans le li
//     newLiElement.textContent = text;
//     // Insérer le li dans le ul
//     parent.appendChild(newLiElement);
// }

// Cibler le ul
const parentUlElement = document.getElementById('result');

// generateLi(parentUlElement, 'Sunglasses');
// generateLi(parentUlElement, 'Suit');
// generateLi(parentUlElement, 'Business card');
// generateLi(parentUlElement, 'Jet ski');

// for (let i = 0; i < items.length; i++) {
//     generateLi(parentUlElement, items[i])
// }

// items.forEach(function(currentItem) {
//     generateLi(parentUlElement, currentItem);
// });

let inputElement = document.getElementById('input');


let submitElement = document.getElementById('submit');
submitElement.onclick = function() {
    let newLiElement = document.createElement('li');
    let newCross = document.createElement('button');
    newCross.textContent = 'X';
    newCross.setAttribute('class', 'delete');
    newLiElement.textContent = inputElement.value;
    parentUlElement.appendChild(newLiElement, newCross);
    newLiElement.appendChild(newCross);
    inputElement.value = '';
}

let deleteElement = document.querySelector('.delete');
deleteElement.onclick = function() {
    console.log('coucou')
}

// newLiElement.textContent = inputElement.textContent;
// parentUlElement.appendChild(newLiElement);