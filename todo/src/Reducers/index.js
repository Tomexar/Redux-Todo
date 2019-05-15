import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../Actions';

const initialState = {
    todos: [
        { name: 'Clean Room', completed: false, id: Math.random() }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { name: action.payload, completed: false, id: Date.now() }
                ]

            }


        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            };

        case DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter(todo => !todo.completed)
            }

        default:
            return state;
    }

}

export default reducer;