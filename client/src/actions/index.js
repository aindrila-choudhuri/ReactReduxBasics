let nextTodoId = 0;

export const addTodo = text => ({
    type: "TO_DO",
    id: nextTodoId++,
    text
})