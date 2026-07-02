import { createProject } from './project.js';

const projects = [];
let activeProject = null;

function addProject(name) {
    const project = createProject(name);
    projects.push(project);
    if (!activeProject) activeProject = project;
    return project;
}

function getProjects() {
    return projects;
}

function setActiveProject(name) {
    activeProject = projects.find(p => p.name === name);
}

function getActiveProject() {
    return activeProject;
}

export { addProject, getProjects, setActiveProject, getActiveProject };