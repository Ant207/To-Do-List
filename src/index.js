import './styles.css';
import {createTodo} from './modules/todo.js';
import {addProject, getActiveProject, loadFromStorage} from './modules/projectManager.js';
import {renderProjects, renderTodos} from './modules/domController.js';

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

      const newTodo = createTodo(title, description, dueDate, priority);
      const activeProject = getActiveProject();
      activeProject.addTodo(newTodo);
      renderProjects();
      renderTodos();
  });
