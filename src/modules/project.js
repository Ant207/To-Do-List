export function createProject(name) {
    const todos = [];

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

    return { name, addTodo, removeTodo, getTodos };
}