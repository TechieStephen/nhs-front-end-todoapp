//GETTING OUR HTML ELEMENTS
todos_container = document.getElementById('todos')
btn_add = document.getElementById('btn-add')
btn_trashCheck = document.getElementById('todos')

//DECLARING AN EMPTY TODO ARRAY
var todos = []

//ADDING EVENT TO OUR ADD TODO BUTTON
btn_add.addEventListener('click', addTodo)

//ADDING AN EVENT TO OUR TRASH AND CHECK BUTTON
btn_trashCheck.addEventListener('click', trashCheckTodo)

//ADD TODO FUNCTION
function addTodo(){
    todoInput = document.getElementById('txt-todo').value
    if(todoInput != ''){
        let todo = {
            title:todoInput,
            isCompleted: false
        }
        todos.push(todo)

        //CLEARING THE TODO INPUT
        document.getElementById('txt-todo').value = ''

        getTodos()
    }
}

//GET TODO FUNCTION -- GETTING ALL THE TODO FROM OUR TODO ARRAY AND SENDING TO HTML
function getTodos(){

    //CLEARING OUT THE TODOS CONTAINER
    todos_container.innerHTML = ''

    todos.forEach(item => {
        //CREATED AN LI ELEMENT
        let newElement = document.createElement('li')

        if(item.isCompleted){
            newElement.classList.add('completed')
        }

        //CREATED AN P ELEMENT
        let p = document.createElement('p')
        let content = document.createTextNode(item.title)
        p.append(content)
        newElement.append(p)

        //CREATED A SPAN ELEMENT
        span = document.createElement("span")
        span.innerText = todos.indexOf(item)
        newElement.append(span)

        const btn_trash = document.createElement('button')
        btn_trash.setAttribute('id', 'btn-trash')
        btn_trash.innerHTML = '<i class="fas fa-trash"></i>'
        newElement.append(btn_trash)


        const btn_check = document.createElement('button')
        btn_check.setAttribute('id', 'btn-check')
        btn_check.innerHTML = '<i class="fas fa-check"></i>'
        newElement.append(btn_check)

        todos_container.append(newElement)
    });
}

//DELETE/CHECK TODO FUNCTION
function trashCheckTodo(e){
    const element = e.target
    index = e.target.parentElement.childNodes[1].innerText

    if(e.target.id == 'btn-trash'){
        todos.splice(index, 1)
        getTodos()
    }
    else if(e.target.id == 'btn-check'){
        
        todos.forEach((item)=>{
            if(todos.indexOf(item) == index){
                if(item.isCompleted){
                    item.isCompleted = false
                }
                else{
                    item.isCompleted = true
                }
            }

        })
        element.parentElement.classList.toggle('completed')
        //getTodos()
    }
}

getTodos()
