import './styles.css';
import { addProject } from './modules/projectManager.js';
import { renderProjects, renderTodos } from './modules/domController.js';

addProject("Default");
renderProjects();
renderTodos();
console.log("it works");