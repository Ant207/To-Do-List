export function createTodo(title, description, dueDate, priority) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
        dueDate,
        priority,
        completed: false,
        toggleComplete() {
            this.completed = !this.completed;
        },
        updateDetails(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    };
}

export function todoToPlain(todo) {
    return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
        priority: todo.priority,
        completed: todo.completed,
    };
}

export function todoFromPlain(plainTodo) {
    return {
        id: plainTodo.id,
        title: plainTodo.title,
        description: plainTodo.description,
        dueDate: plainTodo.dueDate,
        priority: plainTodo.priority,
        completed: plainTodo.completed,
        toggleComplete() {
            this.completed = !this.completed;
    },
        updateDetails(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        },
    }
}