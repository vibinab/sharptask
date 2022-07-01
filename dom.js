console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title="changedom title"
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent="hello"

console.log(document.forms)

var headertitle=document.getElementById('header-title');
console.log(headertitle);

console.log(headertitle.textContent)
console.log(headertitle.innerText)

// headertitle.innerHTML='<h4>innerhtml</h4>' 

let header=document.getElementById('main-header') 
header.style.borderBottom='solid 3px #000'

let additems= document.getElementsByClassName('title')
additems[0].style.color='green';
additems[0].style.font='bold';
