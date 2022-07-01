var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');



form.addEventListener('submit', additems);

itemlist.addEventListener('click', removeitems);



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




