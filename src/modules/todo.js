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
        }
    };
}

export function todoToPlain(plainTodo) {
    return {
        id: plainTodo.id,
        title: plainTodo.title,
        description: plainTodo.description,
        dueDate: plainTodo.dueDate,
        priority: plainTodo.priority,
        completed: plainTodo.completed,
        toggleComplete() {this.completed = !this.completed;}
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
        toggleComplete() {this.completed = !this.completed;}
    }
}