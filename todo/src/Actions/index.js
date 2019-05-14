export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';
export const addTodo = newtodo =>{
    return {
        type : ADD_TODO,
        payload: newtodo
    };
};

export const toggleTodo= id =>{
    return {
        type : TOGGLE_COMPLETED,
        payload: id
    };
};

export const deleteTodo = () =>{
    return {
        type: DELETE_TODO
    };
};