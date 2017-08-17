import {getTodos, createTodo} from '../lib/todoService'

const initState = {
    todos: [],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
const TODO_LOAD = 'TODO_LOAD'
const TODO_ADD = 'TODO_ADD'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})
export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})

export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo = (name) => {
    return (dispatch) => {
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}



export default (state = initState, action) => {
    switch (action.type){
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
        case TODO_LOAD:
            return {...state, todos: action.payload}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        default:
            return state
    }
}