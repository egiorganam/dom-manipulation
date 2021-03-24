// 
const paragraph = document.getElementById('paragraph')
paragraph.removeAttribute('id')
paragraph.setAttribute('class', 'paragraph')
paragraph.removeAttribute('class')

// 
const links = document.getElementsByClassName('link')

const linkGoogle = document.getElementById('google-link')
linkGoogle.setAttribute('href', 'http://www.google.com')
linkGoogle.setAttribute('target', '_blank')

// let divs = document.getElementsByTagName('div')

// 
let h2Tag = document.createElement('h2')
h2Tag.innerHTML = 'pepega'

let parent = document.getElementsByTagName('body')[0]
parent.appendChild(h2Tag)

// 
let text = document.createTextNode('This text is created dynamically 🪐')
parent.appendChild(text)

// 
let parrafo = document.createElement('p')
let text2 = document.createTextNode('Hi there! I am using JavaScript 🍟')
parrafo.appendChild(text2)
parent.appendChild(parrafo)

// 
let h1Tag = document.createElement('h1')
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2'
parent.insertBefore(h1Tag, h2Tag)

// 
let btn = document.getElementById('add-item-button')
let nose = document.createElement('input')
parent.insertBefore(nose, btn)

// 
//parent.removeChild(btn)

// 
let list = document.createElement('ul')
parent.appendChild(list)

let button = document.getElementById("add-item-button")
    .addEventListener('click', () => {
        let item = document.createElement('li')
        item.innerHTML = 'Item'
        list.appendChild(item)
    })

// button.onclick = () => console.log('add')

//
let theUl = document.querySelector('.list'); // gets the "ul" element

console.log(theUl.childNodes); // ==> check what's in the console

theUl.childNodes.forEach(theLiTag => {
    theLiTag.onclick = function(){
        console.log(theLiTag.innerHTML);
    }
})
