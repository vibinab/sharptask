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
additems[0].style.fontWeight='bold';

var items=document.getElementsByClassName('list-group-item');
console.log(items)
items[2].style.backgroundColor="green";


for (var i=0; i<items.length; i++){
    items[i].style.fontWeight="bold"
}


var li =document.getElementsByTagName('li')
console.log(li)

for (var i=0;i<li.length;i++){
    li[i].style.color="red"
} 

var qh= document.querySelector('input');
qh.value="get input value"

var submit=document.querySelector('input[type="submit"]')
submit.value="send"

var sql= document.querySelector('.list-group-item:nth-child(2)')
sql.style.backgroundColor="green"

var four=document.querySelector('.list-group-item:nth-child(3)')
four.style.display="none"

var secondall= document.querySelectorAll('.list-group-item1')
secondall[1].style.color="green";

var selectodd= document.querySelectorAll('.list-group-item1:nth-child(odd)')
for (var i=0;i<selectodd.length; i++){
    selectodd[i].style.backgroundColor="green"
}














