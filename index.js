const fruitsitem = document.getElementsByClassName('fruit');


for (let index = 0; index < fruitsitem.length; index++) {
    const editButton = document.createElement('button');
    const editButtonText= document.createTextNode('Edit');
    editButton.className='edit-btn';
    editButton.appendChild(editButtonText);
    fruitsitem[index].appendChild(editButton);
}
const form = document.querySelector('form');
const fruitToAdd=document.getElementById('fruit-to-add');
//console.log(form);
const fruits=document.querySelector('.fruits')
form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById('fruit-to-add');
    const liTag=document.createElement('li');
    console.log(liTag);
    liTag.innerHTML = fruitToAdd.value + '<button class="button-btn">Delete</button><button class="edit-btn">Edit</button>';
    //console.log(liTag);
    // const liText = document.createTextNode(fruitToAdd.value);
    // liTag.appendChild(liText);
    fruits.appendChild(liTag);

    // const deleteButton = document.createElement('button');
    // const deleteButtonText= document.createTextNode('delete');
    // deleteButton.className='button-btn';
    // deleteButton.appendChild(deleteButtonText);
    // liTag.appendChild(deleteButton);

    // const editButton = document.createElement('button');
    // const editButtonText= document.createTextNode('Edit');
    // editButton.className='edit-btn';
    // editButton.appendChild(editButtonText);
    // liTag.appendChild(editButton);
});
fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('button-btn')){
        const feuitsTodelete = event.target.parentElement
        fruits.removeChild(feuitsTodelete);   
    }
});

const filter = document.getElementById('filter');
filter.addEventListener('keyup',event=>{
    const tesxtEnterd = event.target.value.toLowerCase();
    const fruits = document.getElementsByClassName('fruit');
    for (let index = 0; index < fruits.length; index++) {
        const currentFruit = fruits[index].firstChild.textContent.toLowerCase();
        if(currentFruit.indexOf(tesxtEnterd)=== -1){
            fruits[index].style.display = 'none';
        }
        else{
            fruits[index].style.display = 'flex';
        }
    }
})







