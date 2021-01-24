const todos = (state = [], action) => {
    switch (action.type) {
        case "TO_DO" :
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

export default todos;