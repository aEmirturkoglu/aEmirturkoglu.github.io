
let todoList = []; 

const pelem = document.querySelector('.theP'); 
const dater = document.querySelector('.dater'); 
const deleteCheckedButton = document.querySelector('.delete-checked-button'); 

function rendertodo() {
 let todohtml = ''; 

 todoList.forEach(function(todoObj,index) { // (todoObj, index) => {...}... olarak da olur
 const {todoname, dueDate, completed} = todoObj; 
 //<div class='todo-item'></div> //<div id='content-${index}'>  add this id
 let text = `
  <div id='todo-${index}' class='todo-item'> 
    <div id='content-${index}'> 
      <span id='text-${index}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span> 
      <span id='date-${index}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span> 
    </div>
    <div> <button id='edit-${index}' class='edit-button' onclick='editTodo(${index});'>edit</button> </div>
    <div> <button id='delete-${index}' class='delete-button' onclick='deleteTodo(${index});'>delete</button> </div>
    <div> <input type='checkbox' id='check-${index}' ${completed ? 'checked' : ''} onclick='toggleCompleted(${index});'> </div>
  </div>
 `;
 
 todohtml += text; 
 
 });

 pelem.innerHTML = todohtml; 

 for (let i = 0; i < todoList.length; i++) {

 let todoText = document.getElementById(`text-${i}`) || null; 

 if (todoText !== null) {

 todoText.addEventListener('dblclick', function() { 
 deleteTodo(i); 

 });

 };

 let date = document.getElementById(`date-${i}`) || null; // use a different id for the date element

 if (date !== null) {

  date.addEventListener('dblclick', function() { // add an event listener to the date element
 deleteTodo(i); 
 
 });
 
 };
 
 let checkbox = document.getElementById(`check-${i}`) || null; // use a different id for the checkbox element
 
 if (checkbox !== null) {
 checkbox.addEventListener('dblclick', function() { // add an event listener to the checkbox element
 deleteTodo(i); 
 
 });
 };
 }

 console.log(todoContent); // check if this element exists and is correct
console.log(todoText); // check if this element exists and is a child of todoContent
console.log(inputText); // check if this element exists and is correct

}

const inputtext = document.querySelector('.input-text'); 

function enterKeyPressed(event) { 

 if (event.keyCode == 13) { 
 addTodo(); 
 return true;
 } else {
 return false;
 }

}

function addTodo() { 

 let todoname = inputtext.value; 
 let dueDate = dater.value; 
 
 
 todoList.push({todoname,dueDate, completed: false}); 
 inputtext.value = ''; 
 dater.value = ''; 
 rendertodo(); 

}


function deleteTodo(index) {

 todoList.splice(index, 1); 
 rendertodo(); 

}


function deleteChecked() {

  if (null) {
    
  } else {
   for (let i = todoList.length - 1; i >= 0; i--) { 
 if (todoList[i].completed) { 
 deleteTodo(i); 
 }
 } 
 }
 
}


function toggleCompleted(index) {

  // use index instead of i
  let checkbox = document.getElementById(`check-${index}`);
  let checked = checkbox.checked;
  todoList[index].completed = checked;
  let text = document.getElementById(`text-${index}`);
  let date = document.getElementById(`date-${index}`) || null; // use index instead of i
  if (checked) {
    text.classList.add('completed');
    date.classList.add('completed'); // add the completed class to the date element
  } else {
    text.classList.remove('completed');
    date.classList.remove('completed'); // remove the completed class from the date element
  }

}

deleteCheckedButton.addEventListener('click', function() {

 deleteChecked(); 
 
});

// define a function to delete all the items
function deleteAll() {
 // use a filter method to create an empty array
 let emptyArray = todoList.filter(item => false);
 // assign the empty array back to the todo list array
 todoList = emptyArray;
 rendertodo();
}

// create a function to edit a todo item
function editTodo(index) {////////////////////////////////////////////////////////////////////////////////////////////////
  try {
    // get the todo item element by its index
    let todoItem = document.getElementById(`todo-${index}`);
    // get the text and date elements inside the todo item
    let todoText = document.getElementById(`text-${index}`);
    let todoDate = document.getElementById(`date-${index}`);
    // get the edit and delete buttons inside the todo item
    let editButton = document.getElementById(`edit-${index}`);
    let deleteButton = document.getElementById(`delete-${index}`);
    // create an input element and a date picker element
    let inputText = document.createElement('input') || null;
    let inputDate = document.createElement('input');
    // set their types to text and date
    inputText.type = 'text';
    inputDate.type = 'date';
    // set their values to the current text and date of the todo item
    inputText.value = todoText.innerText;
    inputDate.value = todoDate.innerText;
    // create a save button element
    let saveButton = document.createElement('button');
    // set its text to save
    saveButton.innerText = 'save';
    // add an event listener to the save button
    saveButton.addEventListener('click', function() {
      // update the todo list array with the new values
      todoList[index].todoname = inputText.value;
      todoList[index].dueDate = inputDate.value;
      // call the renderTodo function to display the changes
      renderTodo();
    });
    // get the div element that contains the text and date elements by its id
    let todoContent = document.getElementById(`content-${index}`); // get this element
    // use it as the parent node to replace the text and date elements
    todoContent.replaceChild(inputText, todoText);
    todoContent.replaceChild(inputDate, todoDate);
    // use the todo item as the parent node to replace the edit button with the save button
    //todoItem.replaceChild(saveButton, editButton);
    saveButton.replaceChild(saveButton, editButton);
    // hide the delete button
    deleteButton.style.display = 'none';
  } catch (error) {
    // handle the error
    console.log(error);
  }
}


/*
let todoList = []; 

const pelem = document.querySelector('.theP'); 
const dater = document.querySelector('.dater'); 
const deleteCheckedButton = document.querySelector('.delete-checked-button'); 
rendertodo(); 

function rendertodo() {
 let todohtml = ''; 

 todoList.forEach(function(todoObj,index) { // (todoObj, index) => {...}... olarak da olur
 const {todoname, dueDate, completed} = todoObj; 
 //<div class='todo-item'></div>
 let text = `
  <div id='todo-${index}' class='todo-item'> 
    <div id='content-${index}'> // add this id
      <span id='text-${index}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span> 
      <span id='date-${index}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span> 
    </div>
    <div> <button id='edit-${index}' class='edit-button' onclick='editTodo(${index});'>edit</button> </div>
    <div> <button id='delete-${index}' class='delete-button' onclick='deleteTodo(${index});'>delete</button> </div>
    <div> <input type='checkbox' id='check-${index}' ${completed ? 'checked' : ''} onclick='toggleCompleted(${index});'> </div>
  </div>
 `;
 
 todohtml += text; 
 
 });

 pelem.innerHTML = todohtml; 

 for (let i = 0; i < todoList.length; i++) {

 let todoText = document.getElementById(`text-${i}`) || null; 

 if (todoText !== null) {

 todoText.addEventListener('dblclick', function() { 
 deleteTodo(i); 

 });

 };

 let date = document.getElementById(`date-${i}`) || null; // use a different id for the date element

 if (date !== null) {

  date.addEventListener('dblclick', function() { // add an event listener to the date element
 deleteTodo(i); 
 
 });
 
 };
 
 let checkbox = document.getElementById(`check-${i}`) || null; // use a different id for the checkbox element
 
 if (checkbox !== null) {
 checkbox.addEventListener('dblclick', function() { // add an event listener to the checkbox element
 deleteTodo(i); 
 
 });
 };
 }

}

const inputtext = document.querySelector('.input-text'); 

function enterKeyPressed(event) { 

 if (event.keyCode == 13) { 
 addTodo(); 
 return true;
 } else {
 return false;
 }

}

/*
document.querySelector('.js-addtodobutton')  addtodo nun onclickini silebilirsin bununla
  .addEventListener('click', () => {
    addTodo();
  });
*/ 
/*
function addTodo() { 

 let todoname = inputtext.value; 
 let dueDate = dater.value; 
 
 
 todoList.push({todoname,dueDate, completed: false}); 
 inputtext.value = ''; 
 dater.value = ''; 
 rendertodo(); 

}


function deleteTodo(index) {

 todoList.splice(index, 1); 
 rendertodo(); 

}


function deleteChecked() {

  if (null) {
    
  } else {
   for (let i = todoList.length - 1; i >= 0; i--) { 
 if (todoList[i].completed) { 
 deleteTodo(i); 
 }
 } 
 }
 
}


function toggleCompleted(index) {

  // use index instead of i
  let checkbox = document.getElementById(`check-${index}`);
  let checked = checkbox.checked;
  todoList[index].completed = checked;
  let text = document.getElementById(`text-${index}`);
  let date = document.getElementById(`date-${index}`) || null; // use index instead of i
  if (checked) {
    text.classList.add('completed');
    date.classList.add('completed'); // add the completed class to the date element
  } else {
    text.classList.remove('completed');
    date.classList.remove('completed'); // remove the completed class from the date element
  }

}

deleteCheckedButton.addEventListener('click', function() {

 deleteChecked(); 
 
});

// define a function to delete all the items
function deleteAll() {
 // use a filter method to create an empty array
 let emptyArray = todoList.filter(item => false);
 // assign the empty array back to the todo list array
 todoList = emptyArray;
 rendertodo();
}

// create a function to edit a todo item
function editTodo(index) {
  // get the todo item element by its index
  let todoItem = document.getElementById(`todo-${index}`);
  // get the text and date elements inside the todo item
  let todoText = document.getElementById(`text-${index}`);
  let todoDate = document.getElementById(`date-${index}`);
  // get the edit and delete buttons inside the todo item
  let editButton = document.getElementById(`edit-${index}`);
  let deleteButton = document.getElementById(`delete-${index}`);
  // create an input element and a date picker element
  let inputText = document.createElement('input');
  let inputDate = document.createElement('input');
  // set their types to text and date
  inputText.type = 'text';
  inputDate.type = 'date';
  // set their values to the current text and date of the todo item
  inputText.value = todoText.innerText;
  inputDate.value = todoDate.innerText;
  // create a save button element
  let saveButton = document.createElement('button');
  // set its text to save
  saveButton.innerText = 'save';
  // add an event listener to the save button
  saveButton.addEventListener('click', function() {
    // update the todo list array with the new values
    todoList[index].todoname = inputText.value;
    todoList[index].dueDate = inputDate.value;
    // call the renderTodo function to display the changes
    renderTodo();
  });
  // get the div element that contains the text and date elements by its id
  let todoContent = document.getElementById(`content-${index}`); // get this element
  // use it as the parent node to replace the text and date elements
  todoContent.replaceChild(inputText, todoText);
  todoContent.replaceChild(inputDate, todoDate);
  // replace the edit button with the save button
  todoItem.replaceChild(saveButton, editButton);
  // hide the delete button
  deleteButton.style.display = 'none';
}


/*
let todoList = []; 

const pelem = document.querySelector('.theP'); 
const dater = document.querySelector('.dater'); 
const deleteCheckedButton = document.querySelector('.delete-checked-button'); 
rendertodo(); 

function rendertodo() {
 let todohtml = ''; 

 todoList.forEach(function(todoObj,index) { // (todoObj, index) => {...}... olarak da olur
 const {todoname, dueDate, completed} = todoObj; 
 //<div class='todo-item'></div>
 let text = 
 `
 
 <div id='todo-${index}' class='todo-item'> 
  <div> <span id='text-${index}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span> </div>
  <div> <span id='date-${index}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span> </div>
  <div> <button id='edit-${index}' class='edit-button' onclick='editTodo(${index});'>edit</button> </div>
  <div> <button id='delete-${index}' class='delete-button' onclick='deleteTodo(${index});'>delete</button> </div>
  <div> <input type='checkbox' id='check-${index}' ${completed ? 'checked' : ''} onclick='toggleCompleted(${index});'> </div>
 </div>

 `;
 
 todohtml += text; 
 
 });

 pelem.innerHTML = todohtml; 

 for (let i = 0; i < todoList.length; i++) {

 let todoText = document.getElementById(`text-${i}`) || null; 

 if (todoText !== null) {

 todoText.addEventListener('dblclick', function() { 
 deleteTodo(i); 

 });

 };

 let date = document.getElementById(`date-${i}`) || null; // use a different id for the date element

 if (date !== null) {

  date.addEventListener('dblclick', function() { // add an event listener to the date element
 deleteTodo(i); 
 
 });
 
 };
 
 let checkbox = document.getElementById(`check-${i}`) || null; // use a different id for the checkbox element
 
 if (checkbox !== null) {
 checkbox.addEventListener('dblclick', function() { // add an event listener to the checkbox element
 deleteTodo(i); 
 
 });
 };
 }

}

const inputtext = document.querySelector('.input-text'); 

function enterKeyPressed(event) { 

 if (event.keyCode == 13) { 
 addTodo(); 
 return true;
 } else {
 return false;
 }

}

/*
document.querySelector('.js-addtodobutton')  addtodo nun onclickini silebilirsin bununla
  .addEventListener('click', () => {
    addTodo();
  });
*/ 
/*
function addTodo() { 

 let todoname = inputtext.value; 
 let dueDate = dater.value; 
 
 
 todoList.push({todoname,dueDate, completed: false}); 
 inputtext.value = ''; 
 dater.value = ''; 
 rendertodo(); 

}


function deleteTodo(index) {

 todoList.splice(index, 1); 
 rendertodo(); 

}


function deleteChecked() {

  if (null) {
    
  } else {
   for (let i = todoList.length - 1; i >= 0; i--) { 
 if (todoList[i].completed) { 
 deleteTodo(i); 
 }
 } 
 }
 
}


function toggleCompleted(index) {

  // use index instead of i
  let checkbox = document.getElementById(`check-${index}`);
  let checked = checkbox.checked;
  todoList[index].completed = checked;
  let text = document.getElementById(`text-${index}`);
  let date = document.getElementById(`date-${index}`) || null; // use index instead of i
  if (checked) {
    text.classList.add('completed');
    date.classList.add('completed'); // add the completed class to the date element
  } else {
    text.classList.remove('completed');
    date.classList.remove('completed'); // remove the completed class from the date element
  }

}

deleteCheckedButton.addEventListener('click', function() {

 deleteChecked(); 
 
});

// define a function to delete all the items
function deleteAll() {
 // use a filter method to create an empty array
 let emptyArray = todoList.filter(item => false);
 // assign the empty array back to the todo list array
 todoList = emptyArray;
 rendertodo();
}

// create a function to edit a todo item
function editTodo(index) {
  // get the todo item element by its index
  let todoItem = document.getElementById(`todo-${index}`);
  // get the text and date elements inside the todo item
  let todoText = document.getElementById(`text-${index}`);
  let todoDate = document.getElementById(`date-${index}`);
  // get the edit and delete buttons inside the todo item
  let editButton = document.getElementById(`edit-${index}`);
  let deleteButton = document.getElementById(`delete-${index}`);
  // create an input element and a date picker element
  let inputText = document.createElement('input');
  let inputDate = document.createElement('input');
  // set their types to text and date
  inputText.type = 'text';
  inputDate.type = 'date';
  // set their values to the current text and date of the todo item
  inputText.value = todoText.innerText;
  inputDate.value = todoDate.innerText;
  // create a save button element
  let saveButton = document.createElement('button');
  // set its text to save
  saveButton.innerText = 'save';
  // add an event listener to the save button
  saveButton.addEventListener('click', function() {
    // update the todo list array with the new values
    todoList[index].todoname = inputText.value;
    todoList[index].dueDate = inputDate.value;
    // call the renderTodo function to display the changes
    renderTodo();
  });
  // replace the text and date elements with the input elements
  todoItem.replaceChild(inputText, todoText);
  todoItem.replaceChild(inputDate, todoDate);
  // replace the edit button with the save button
  todoItem.replaceChild(saveButton, editButton);
  // hide the delete button
  deleteButton.style.display = 'none';
} // delete this extra closing brace

*/

// let todoList = []; 

// const pelem = document.querySelector('.theP'); 
// const dater = document.querySelector('.dater'); 
// const deleteCheckedButton = document.querySelector('.delete-checked-button'); 
// rendertodo(); 

// function rendertodo() {
//  let todohtml = ''; 

//  todoList.forEach(function(todoObj,index) { // (todoObj, index) => {...}... olarak da olur
//  const {todoname, dueDate, completed} = todoObj; 
//  //<div class='todo-item'></div>
//  let text = 
//  `
 
//  <div id='todo-${index}' class='todo-item'> 
//   <div> <span id='text-${index}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span> </div>
//   <div> <span id='date-${index}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span> </div>
//   <div> <button id='edit-${index}' class='edit-button' onclick='editTodo(${index});'>edit</button> </div>
//   <div> <button id='delete-${index}' class='delete-button' onclick='deleteTodo(${index});'>delete</button> </div>
//   <div> <input type='checkbox' id='check-${index}' ${completed ? 'checked' : ''} onclick='toggleCompleted(${index});'> </div>
//  </div>

//  `;
 
//  todohtml += text; 
 
//  });

//  pelem.innerHTML = todohtml; 

//  for (let i = 0; i < todoList.length; i++) {

//  let todoText = document.getElementById(`text-${i}`) || null; 

//  if (todoText !== null) {

//  todoText.addEventListener('dblclick', function() { 
//  deleteTodo(i); 

//  });

//  };

//  let date = document.getElementById(`date-${i}`) || null; // use a different id for the date element

//  if (date !== null) {

//   date.addEventListener('dblclick', function() { // add an event listener to the date element
//  deleteTodo(i); 
 
//  });
 
//  };
 
//  let checkbox = document.getElementById(`check-${i}`) || null; // use a different id for the checkbox element
 
//  if (checkbox !== null) {
//  checkbox.addEventListener('dblclick', function() { // add an event listener to the checkbox element
//  deleteTodo(i); 
 
//  });
//  };
//  }

// }

// const inputtext = document.querySelector('.input-text'); 

// function enterKeyPressed(event) { 

//  if (event.keyCode == 13) { 
//  addTodo(); 
//  return true;
//  } else {
//  return false;
//  }

// }

// /*
// document.querySelector('.js-addtodobutton')  addtodo nun onclickini silebilirsin bununla
//   .addEventListener('click', () => {
//     addTodo();
//   });
// */ 

// function addTodo() { 

//  let todoname = inputtext.value; 
//  let dueDate = dater.value; 
 
 
//  todoList.push({todoname,dueDate, completed: false}); 
//  inputtext.value = ''; 
//  dater.value = ''; 
//  rendertodo(); 

// }


// function deleteTodo(index) {

//  todoList.splice(index, 1); 
//  rendertodo(); 

// }


// function deleteChecked() {

//   if (null) {
    
//   } else {
//    for (let i = todoList.length - 1; i >= 0; i--) { 
//  if (todoList[i].completed) { 
//  deleteTodo(i); 
//  }
//  } 
//  }
 
// }


// function toggleCompleted(index) {

//   // use index instead of i
//   let checkbox = document.getElementById(`check-${index}`);
//   let checked = checkbox.checked;
//   todoList[index].completed = checked;
//   let text = document.getElementById(`text-${index}`);
//   let date = document.getElementById(`date-${index}`) || null; // use index instead of i
//   if (checked) {
//     text.classList.add('completed');
//     date.classList.add('completed'); // add the completed class to the date element
//   } else {
//     text.classList.remove('completed');
//     date.classList.remove('completed'); // remove the completed class from the date element
//   }

// }

// deleteCheckedButton.addEventListener('click', function() {

//  deleteChecked(); 
 
// });

// // define a function to delete all the items
// function deleteAll() {
//  // use a filter method to create an empty array
//  let emptyArray = todoList.filter(item => false);
//  // assign the empty array back to the todo list array
//  todoList = emptyArray;
//  rendertodo();
// }

// // create a function to edit a todo item
// function editTodo(index) {
//   // get the todo item element by its index
//   let todoItem = document.getElementById(`todo-${index}`);
//   // get the text and date elements inside the todo item
//   let todoText = document.getElementById(`text-${index}`);
//   let todoDate = document.getElementById(`date-${index}`);
//   // get the edit and delete buttons inside the todo item
//   let editButton = document.getElementById(`edit-${index}`);
//   let deleteButton = document.getElementById(`delete-${index}`);
//   // create an input element and a date picker element
//   let inputText = document.createElement('input');
//   let inputDate = document.createElement('input');
//   // set their types to text and date
//   inputText.type = 'text';
//   inputDate.type = 'date';
//   // set their values to the current text and date of the todo item
//   inputText.value = todoText.innerText;
//   inputDate.value = todoDate.innerText;
//   // create a save button element
//   let saveButton = document.createElement('button');
//   // set its text to save
//   saveButton.innerText = 'save';
//   // add an event listener to the save button
//   saveButton.addEventListener('click', function() {
//     // update the todo list array with the new values
//     todoList[index].todoname = inputText.value;
//     todoList[index].dueDate = inputDate.value;
//     // call the renderTodo function to display the changes
//     renderTodo();
//   });
//   // replace the text and date elements with the input elements
//   todoItem.replaceChild(inputText, todoText);
//   todoItem.replaceChild(inputDate, todoDate);
//   // replace the edit button with the save button
//   todoItem.replaceChild(saveButton, editButton);
//   // hide the delete button
//   deleteButton.style.display = 'none';
// }



/*
let todoList = []; 

const pelem = document.querySelector('.theP'); 
const dater = document.querySelector('.dater'); 
const deleteCheckedButton = document.querySelector('.delete-checked-button'); 
rendertodo(); 

function rendertodo() {
 let todohtml = ''; 

 todoList.forEach(function(todoObj,index) { // (todoObj, index) => {...}... olarak da olur
 const {todoname, dueDate, completed} = todoObj; 
 //<div class='todo-item'></div>
 let text = 
 `
 
 <div> <span id='todo-${index}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span> </div>
 
 <div> <span id='date-${index}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span> </div>

 <div> <button class='delete-button' onclick='deleteTodo(${index});'>delete</button> </div>
 
 <div> <input type='checkbox' id='check-${index}' ${completed ? 'checked' : ''} onclick='toggleCompleted(${index});'> </div>

 `;
 
 todohtml += text; 
 
 });

 /*
 for (let i = 0; i < todoList.length; i++) { 
 const todoObj = todoList[i]; 
 const {todoname, dueDate, completed} = todoObj; 
 //<div class='todo-item'></div>
 let text = 
 `
 
 <div> <span id='todo-${i}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span> </div>
 
 <div> <span id='date-${i}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span> </div>

 <div> <button class='delete-button' onclick='deleteTodo(${i});'>delete</button> </div>
 
 <div> <input type='checkbox' id='check-${i}' ${completed ? 'checked' : ''} onclick='toggleCompleted(${i});'> </div>

 `;
 
 todohtml += text; 
 
 }*/

 

//  pelem.innerHTML = todohtml; 

//  for (let i = 0; i < todoList.length; i++) {

//  let todoText = document.getElementById(`todo-${i}`) || null; 

//  if (todoText !== null) {

//  todoText.addEventListener('dblclick', function() { 
//  deleteTodo(i); 

//  });

//  };

//  let date = document.getElementById(`date-${i}`) || null; // use a different id for the date element

//  if (date !== null) {

//   date.addEventListener('dblclick', function() { // add an event listener to the date element
//  deleteTodo(i); 
 
//  });
 
//  };
 
//  let checkbox = document.getElementById(`check-${i}`) || null; // use a different id for the checkbox element
 
//  if (checkbox !== null) {
//  checkbox.addEventListener('dblclick', function() { // add an event listener to the checkbox element
//  deleteTodo(i); 
 
//  });
//  };
//  }

 //console.log(document.querySelectorAll('.delete-button'));
 /*
 document.querySelectorAll('.deletebutton')
  .forEach((deleteCheckedButton, index) => {  delete button daki onclicki sildirmeli test edilmedi
    deleteCheckedButton.addEventListener('click', () => {
      deleteTodo(index);
    })
  })
 
}*/

// const inputtext = document.querySelector('.input-text'); 

// function enterKeyPressed(event) { 

//  if (event.keyCode == 13) { 
//  addTodo(); 
//  return true;
//  } else {
//  return false;
//  }

// }

/*
document.querySelector('.js-addtodobutton')  addtodo nun onclickini silebilirsin bununla
  .addEventListener('click', () => {
    addTodo();
  });
*/ 

// function addTodo() { 

//  let todoname = inputtext.value; 
//  let dueDate = dater.value; 
 
 
//  todoList.push({todoname,dueDate, completed: false}); 
//  inputtext.value = ''; 
//  dater.value = ''; 
//  rendertodo(); 

// }


// function deleteTodo(index) {

//  todoList.splice(index, 1); 
//  rendertodo(); 

// }


// function deleteChecked() {

//   if (null) {
    
//   } else {
//    for (let i = todoList.length - 1; i >= 0; i--) { 
//  if (todoList[i].completed) { 
//  deleteTodo(i); 
//  }
//  } 
//  }
 
// }


// function toggleCompleted(index) {

//   // use index instead of i
//   let checkbox = document.getElementById(`check-${index}`);
//   let checked = checkbox.checked;
//   todoList[index].completed = checked;
//   let text = document.getElementById(`todo-${index}`);
//   let date = document.getElementById(`date-${index}`) || null; // use index instead of i
//   if (checked) {
//     text.classList.add('completed');
//     date.classList.add('completed'); // add the completed class to the date element
//   } else {
//     text.classList.remove('completed');
//     date.classList.remove('completed'); // remove the completed class from the date element
//   }

// }

// deleteCheckedButton.addEventListener('click', function() {

//  deleteChecked(); 
 
// });

// // define a function to delete all the items
// function deleteAll() {
//  // use a filter method to create an empty array
//  let emptyArray = todoList.filter(item => false);
//  // assign the empty array back to the todo list array
//  todoList = emptyArray;
//  rendertodo();
// }


/*
let todoList = []; 

const pelem = document.querySelector('.theP'); 
const dater = document.querySelector('.dater'); 
const deleteCheckedButton = document.querySelector('.delete-checked-button'); 
rendertodo(); 

function rendertodo() {
 let todohtml = ''; 

 for (let i = 0; i < todoList.length; i++) { 
 const todoObj = todoList[i]; 
 const {todoname, dueDate, completed} = todoObj; 
 
 let text = 
 `<div class='todo-item'><input type='checkbox' id='check-${i}' ${completed ? 'checked' : ''} onclick='
 toggleCompleted(${i});
 '><span id='todo-${i}' class='todo-text ${completed ? 'completed' : ''}'>${todoname}</span><span id='date-${i}' class='todo-date ${completed ? 'completed' : ''}'>${dueDate}</span><button class='delete-button' onclick='
 deleteTodo(${i});
 '>
 delete
 </button></div>`;
 
 todohtml += text; 
 
 }
 pelem.innerHTML = todohtml; 

 for (let i = 0; i < todoList.length; i++) {
 let todoText = document.getElementById(`todo-${i}`) || null; 
 if (todoText !== null) {
 todoText.addEventListener('dblclick', function() { 
 deleteTodo(i); 
 });
 };
 let date = document.getElementById(`date-${i}`) || null; // use a different id for the date element
 if (date !== null) {
 date.addEventListener('dblclick', function() { // add an event listener to the date element
 deleteTodo(i); 
 });
 };
 }
}

const inputtext = document.querySelector('.input-text'); 

function addTodo() { 
 let todoname = inputtext.value; 
 let dueDate = dater.value; 
 todoList.push({todoname,dueDate, completed: false}); 
 inputtext.value = ''; 
 dater.value = ''; 
 rendertodo(); 
}
*/
