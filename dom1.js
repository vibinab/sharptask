var itemlist=document.querySelector('#items')


console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor="#f4f4f4"

console.log(itemlist.parentNode.parentNode) 

console.log(itemlist.parentElement)
console.log(itemlist.parentElement.parentElement)

console.log(itemlist.childNodes)
console.log(itemlist.children)


console.log(itemlist.children[1])

itemlist.children[2].style.backgroundColor='yellow'

console.log(itemlist.firstChild)
console.log(itemlist.firstElementChild)
itemlist.firstElementChild.textContent="change"
itemlist.lastElementChild.textContent="last"

console.log(itemlist.nextSibling)
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color="red";


var newdiv=  document.createElement('div')
newdiv.className='hello'

newdiv.id='hello1'

newdiv.setAttribute('title','hello');

var newdivtext=document.createTextNode('world');

newdiv.appendChild(newdivtext) 


var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1)



console.log(newdiv) 


let addheader= document.querySelector('.title')
addheader.innerHTML="<p>hello world</p>"+ addheader.innerHTML

let p=document.getElementById('items');
p.innerHTML='<li>hellow</li>'+p.innerHTML