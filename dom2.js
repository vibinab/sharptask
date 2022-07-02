var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

var filter=document.getElementById('filter')



form.addEventListener('submit', additems);

itemlist.addEventListener('click', removeitems);

filter.addEventListener('keyup', filteritems);



function additems(e){
  e.preventDefault();

  var newitem=document.getElementById('item').value;

  var li=document.createElement('li');

  li.className='list-group-item';

  li.appendChild(document.createTextNode(newitem)) 

  var deletebtn =document.createElement('button');

  var editbtn=document.createElement('button')

  editbtn.className='btn btn-danger btn-sm float-right edit';

  deletebtn.className='btn btn-danger btn-sm float-right delete mr-2';

  deletebtn.appendChild(document.createTextNode('x'));
  editbtn.appendChild(document.createTextNode('edit'));

  li.appendChild(deletebtn)
  li.appendChild(editbtn)

   itemlist.appendChild(li)



}



function removeitems(e){

if(e.target.classList.contains('delete')){
          
    if(confirm("are you  ssure")){
        var li=e.target.parentElement;
        itemlist.removeChild(li)
    }
}

}




function filteritems(e) {
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
     
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1){
            item.style.display="block"
        }
        else {
            item.style.display='none'
        }
    })
}


function savetolocal(event){
    event.preventDefault();
    const value=event.target.inputvalue.value
    localStorage.setItem('value', value)
}

