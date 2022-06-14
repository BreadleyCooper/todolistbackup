// importing the arrays and the DOM element
import {completedTodos, filtered, projectArray,todoArray } from "./todoObjects";
import todoForm from "./form";
import { storeTodos } from "./localStorage";

// function to create and append the main section with each todo
function updateMain () {
    todoArray.forEach(element => {
        const main = document.querySelector(".main")
        const todoContainer = document.querySelector(".todoContainer")
        const todoHead = document.querySelector(".todoHead")
        const todo = document.createElement("div")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        todoHead.after(todoContainer)
        todoContainer.append(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push todo to completed 
            completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            todoArray.splice(todoArray.indexOf(element), 1);
            console.log(todoArray)
            storeTodos()
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todo.append()
        }
    });
}

function updateMainFiltered () {
    filtered.forEach(element => {
        const main = document.querySelector(".main")
        const todo = document.createElement("div")
        const todoContainer = document.querySelector(".todoContainer")
        const todoHead = document.querySelector(".todoHead")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        todoHead.after(todoContainer)
        todoContainer.append(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push the todo Object into the completed todos
            completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            todoArray.splice(todoArray.indexOf(element), 1);
            console.log(todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todoContainer.append()
        }
    });
}



// function to clear the todo list, used when filtering by projects NOT WORKING
function clearTodos () {
    const todoContainer = document.querySelector(".todoContainer")
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.lastChild)
    }
    console.log("clearTodos is firing")
}


export default updateMain
export {
    updateMainFiltered,
    clearTodos,
}