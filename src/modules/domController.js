import {
    getProjects,
    setActiveProject,
    getActiveProject,
    removeProject,
    saveToStorage,
} from "./projectManager.js";

function renderProjects() {
    saveToStorage();
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    for (let i = 0; i < getProjects().length; i++) {
        const project = getProjects()[i];
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('project-row');

        if (project === getActiveProject()) {
            containerDiv.classList.add('active');
        }

        const button = document.createElement('button');
        button.textContent = project.name;
        button.addEventListener('click', () => {
            setActiveProject(project.id);
            renderProjects();
            renderTodos();
        });
        const deleteProj = document.createElement('button');
        deleteProj.textContent = 'Delete Project';
        deleteProj.addEventListener('click', () => {
            removeProject(project.id);
            renderProjects();
            renderTodos();
        });
        containerDiv.append(button, deleteProj)
        projectList.append(containerDiv);
    }
}
function renderTodos () {
    saveToStorage();
    const activeProject = getActiveProject();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (!activeProject) {
        return;
    }
    const todos = activeProject.getTodos();
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        const task = document.createElement('div');
        task.classList.add('todo-item');
        if (todo.completed) {
            task.classList.add('completed');
        }

        const titleEl = document.createElement('span');
        titleEl.textContent = todo.title;

        const descriptionEl = document.createElement('span');
        descriptionEl.textContent = todo.description;

        const dueEl = document.createElement('span');
        dueEl.textContent = todo.dueDate;

        const priorityEl = document.createElement('span');
        priorityEl.textContent = todo.priority;
        priorityEl.classList.add(`priority-${todo.priority}`);

        const compBtn = document.createElement('button');
        compBtn.textContent = 'Complete';
        compBtn.addEventListener('click', () => {
            todo.toggleComplete()
            renderTodos()
        })
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            document.getElementById('title').value = todo.title;
            document.getElementById('description').value = todo.description;
            document.getElementById('priority').value = todo.priority;
            document.getElementById('due-date').value  = todo.dueDate;
            setEditingTodoId(todo.id)
        })
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            activeProject.removeTodo(todo.id);
            renderTodos();
        });
        task.append(titleEl, descriptionEl, dueEl, priorityEl, compBtn, editBtn, deleteBtn);
        todoList.append(task);

    }
}
let editingTodoId = null;

function setEditingTodoId(id) {
    editingTodoId = id;
}
function getEditingTodoId() {
    return editingTodoId;
}

export {
    setEditingTodoId,
    getEditingTodoId,
    renderProjects,
    renderTodos
};