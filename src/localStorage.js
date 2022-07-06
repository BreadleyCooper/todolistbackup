import { refreshProjectList } from './index';
import updateMain from './mainContent';
import { projectArray, todoArray } from './todoObjects';

let todoJSONHolder = '';
let projectJSONHolder = '';
let localProjectArray = [];
let localTodoArray = [];

// retrieve the todos from local storage
function retrieveTodos() {
  todoJSONHolder = localStorage.getItem('storedTodos');
  localTodoArray = JSON.parse(todoJSONHolder);
  if (todoJSONHolder !== null) {
    localTodoArray.forEach((element) => todoArray.push(element));
  }
  if (todoArray !== null) {
    updateMain();
  }
}

// retrieve the projects from local storage
function retrieveProjects() {
  projectJSONHolder = localStorage.getItem('storedProjects');
  localProjectArray = JSON.parse(projectJSONHolder);
  if (projectJSONHolder !== null) {
    localProjectArray.forEach((element) => projectArray.push(element));
  }
  if (projectArray !== null) {
    refreshProjectList();
  }
}

// store the todos in local storage
function storeTodos() {
  if (todoArray !== null) {
    const todoJSON = JSON.stringify(todoArray);
    localStorage.setItem('storedTodos', todoJSON);
  }
}
// store the projects in local storage
function storeProjects() {
  if (projectArray !== null) {
    const projectJSON = JSON.stringify(projectArray);
    localStorage.setItem('storedProjects', projectJSON);
  }
}

export {
  storeTodos,
  storeProjects,
  retrieveTodos,
  retrieveProjects,
};
