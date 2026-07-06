import {
    createProject,
    projectFromPlain,
    projectToPlain
} from './project.js';

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
function setActiveProject(id) {
    activeProject = projects.find(p => p.id === id);
}
function getActiveProject() {
    return activeProject;
}
function removeProject(id) {
    const index = projects.findIndex(project => project.id === id);
    if (index > -1) {
        const wasActive = projects[index] === activeProject;
        projects.splice(index, 1);

        if (wasActive) {
            activeProject = projects[index];
        }
    }
}
function saveToStorage() {
    const plainProjects = getProjects().map(projectToPlain);
    localStorage.setItem('projects', JSON.stringify(plainProjects));
}
function loadFromStorage() {
    const saved = localStorage.getItem('projects');
    if (!saved) return false;

    const plainProjects = JSON.parse(saved);
    projects.length = 0;
    plainProjects.forEach(plain => {
        projects.push(projectFromPlain(plain));
    });
    if (projects.length > 0) activeProject = projects[0];
    return true;
}
export {
    addProject,
    getProjects,
    setActiveProject,
    getActiveProject,
    removeProject,
    saveToStorage,
    loadFromStorage,
};