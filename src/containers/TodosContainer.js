import Todos from "../components/Todos";
import { connect, useSelector, useDispatch } from 'react-redux';
import todos from "../modules/todos";
import { changeInput, insert, remove, toggle } from '../modules/todos'
import { useCallback } from "react";
function TodosContainer(props) {
    const { input, todos } = useSelector(( { todos } ) => (
        {
            input: todos.input,
            todos: todos.todos
        }
    ));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);
    

    return(
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}></Todos>
    )
}

export default TodosContainer;
// export default connect(
//     ( { todos } ) => (
//     {
//         input: todos.input,
//         todos: todos.todos,
//     }),
//     {
//         changeInput,
//         insert,
//         remove,
//         toggle
//     }
// )(TodosContainer);