import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const TOGGLE = 'todos/TOGGLE';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
let id = 3;

// export const changeInput = input => (
// {
//     type: CHANGE_INPUT,
//     input
// });
export const changeInput = createAction(CHANGE_INPUT, input => input);
// export const toggle = id => (
//     {
//         type: TOGGLE,
//         id
//     }
// );
export const toggle = createAction(TOGGLE, id => id);
// export const insert = text => (
//     {
//         type: INSERT,
//         todo: {
//             text,
//             done: false,
//             id: id++
//         }
//     }
// );
export const insert = createAction(INSERT, text => (
    {
        text: text,
        id: id++,
        done: false,
    }
));
// export const remove = id => (
//     {
//         type: DELETE,
//         id
//     }
// );
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'redux-study',
            done: true
        },
        {
            id: 2,
            text: 'redux in react',
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload : input}) => 
            produce(state, draft => {
                draft.input = input;
            }),
        [INSERT]: (state, { payload: todo }) => (
            {
                ...state,
                todos: state.todos.concat(todo)
            }
        ),
        [TOGGLE]: (state, { payload: id }) => (
            {
                ...state,
                todos: state.todos.map( todo => todo.id !== id ? { ...todo } : {  todos, done: !todo.done })
            }
        ),
        [REMOVE]: (state, { payload: id }) => (
            {
                ...state,
                todos: state.todos.filter( todo => todo.id !== id)
            }
        )
    },
    initialState
)
export default todos;