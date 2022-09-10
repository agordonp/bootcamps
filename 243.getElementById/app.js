// const h1 = document.querySelector('h1');

// h1.style.fontSize = '3em';

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

xxx.classList.add('clase')
xxx.classList.toggle('clase')
xxx.setAttribute('clase');

const ejemplo = document.createElement('Element');
document.body.appendChild(ejemplo);
//Append nos deja adjuntar mas de una cosa a la vez mientras AppendChild no.
const p = document.querySelector('p');
p.append('I am a new text', 'Second text');
//Prepend agrega al principio el elemento que creemos
const newB = document.createElement('b');
newB.append('Hi');
p.prepend(newB);
//insertAdjacentElement 
//https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
targetElement.insetAdjacentElement(position, element);

//childeNode.after and childNode.before
const h3 = document.createElement('h3');
h3.innerText = 'I am a h3';
h1.after(h3);
h1.before(h3);



const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
    lis[i].classList.toggle('highlight');
}