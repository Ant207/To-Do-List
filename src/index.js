import './styles.css';
import {
    createTodo
} from './modules/todo.js';

import {
    addProject,
    getActiveProject,
    loadFromStorage
} from './modules/projectManager.js';
import {
    renderProjects,
    renderTodos,
    setEditingTodoId,
    getEditingTodoId,
} from './modules/domController.js';

if (!loadFromStorage()) {
    addProject("Default");
}

const newProjectBtn = document.getElementById('new-project-btn');

newProjectBtn.addEventListener('click', () => {
    const newProject = document.getElementById('new-project-input').value;
    addProject(newProject);
    renderProjects();
});

renderProjects();
renderTodos();

const newTodoBtn = document.getElementById('new-todo-btn');
  newTodoBtn.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('due-date').value;
      const priority = document.getElementById('priority').value;

      if (getEditingTodoId()) {
          const activeProject = getActiveProject();
          const todos = activeProject.getTodos()
          const todoToEdit = todos.find(t => t.id === getEditingTodoId());
          todoToEdit.updateDetails(title, description, dueDate, priority);
          setEditingTodoId(null);
      }else{
          const newTodo = createTodo(title, description, dueDate, priority);
          const activeProject = getActiveProject();
          activeProject.addTodo(newTodo);
      }
      renderProjects();
      renderTodos();
  });
