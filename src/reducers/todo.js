const initState = {
    todos: [
        {id: 1, name: 'Create Static UI', isComplete: true},
        {id: 2, name: 'Create Initial State', isComplete: true},
        {id: 3, name: 'Use State to render UI', isComplete: true},
    ],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
const TODO_ADD = 'TODO_ADD'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})

export default (state = initState, action) => {
    switch (action.type){
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        default:
            return state
    }
}