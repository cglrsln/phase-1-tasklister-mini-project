document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    //console.log(e.target.newTaskDescription.value)
    // I changed new-task-description to newTaskDescription in index.html (id="newTaskDescription")
    //<input type="text" id="newTaskDescription" name="new-task-description" placeholder="description">
    buildToDo(e.target.newTaskDescription.value)
    
    form.reset()
  })
});


function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#tasks").appendChild(p)
  }


  function handleDelete(e){
      e.target.parentNode.remove()
  }