import {todoToPlain} from "./todo.js";
import {todoFromPlain} from "./todo.js";

export function createProject(name, existingId, existingTodos) {
    const id = existingId ?? crypto.randomUUID();
    const todos = existingTodos ?? [];

    function addTodo(todo) {
        todos.push(todo);
    }

    function removeTodo(id) {
        const index = todos.findIndex(t => t.id === id);
        if (index !== -1) todos.splice(index, 1);
    }

    function getTodos() {
        return todos;
    }

    return { id, name, addTodo, removeTodo, getTodos };
}

export function projectToPlain(project) {
    return {
        id: project.id,
        name: project.name,
        todos: project.getTodos().map(todoToPlain),
    }
}

export function projectFromPlain(plainProject) {
    const realTodos = plainProject.todos.map(todoFromPlain);
    return createProject(plainProject.name, plainProject.id, realTodos);
}