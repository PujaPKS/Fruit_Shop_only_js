// Add the Edit Button:

const form= document.querySelector('form');
const fruits = document.querySelector('.fruits'); 

//adding edit button to all the fruits present from starting in list
const li = document.querySelectorAll("li");
for (let i = 0 ; i < li.length ; i++) {
    const editCreate = document.createElement("button");
    editCreate.textContent = "Edit";
    editCreate.setAttribute("class" , "edit-btn" );
    li[i].appendChild( editCreate );
}


form.addEventListener('submit', function(event) { 
  event.preventDefault();
      
  //Selected the input element
  const fruitToAdd = document.getElementById('fruit-to-add');
      
  //Created the li
  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = 'fruit'; //given added fruit also same class name
      
  //Creating a delete button to be added inside li
  const deleteBtn = document.createElement('button');
  const deleteBtnText = document.createTextNode('x'); 
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = 'delete-btn';
  newLi.appendChild(deleteBtn);

  //Added edit button to the new fruit added to the list
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("class", "edit-btn"); //setAttribute has 2 arguments--->1. the attribute we want to set   &&   2. the value of that attribute
  newLi.appendChild(editBtn);
      
 //Adding li as last element of unordered list
  fruits.appendChild(newLi);

});

//Deleting element on clicking delete button
fruits.addEventListener('click' , function(event){ 
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  };
});