import {addProject, getProjects, setActiveProject, getActiveProject} from "./projectManager.js";

function renderProjects() {
    const projectList = document.getElementById('project-list');

    for (let i = 0; i < getProjects().length; i++) {
        const project = getProjects()[i];
        const button = document.createElement('button');
        button.textContent = project.name;
        button.addEventListener('click', () => {
            setActiveProject(project.name);
        });
        projectList.append(button);
    }
}

function renderToDos () {
    const activeProject = getActiveProject();
    for (let i = 0; i < activeProject.length; i++) {
        const toDo = document.getElementById('todo-list');
        activeProject.append(toDo);
    }
}