function TodoItem(props) {
    return(
        <div>
            <input type="checkbox" checked={ props.done }readOnly></input>
            <span>{ props.todo.text }</span>
            <button onClick={ () => props.onRemove(props.todo.id) }>삭제</button>
        </div>
    )
}

function Todos(props) {
    const onSubmit = e => {
        e.preventDefault();
        props.onInsert(props.input);
        console.log(props.input);
        props.onChangeInput('');
    };
    const onChange = e => {
        console.log(e.target.value);
        props.onChangeInput(e.target.value)
    };

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input value={props.input} onChange={ onChange }></input>
                <button type="submit">등록</button>
            </form>
            <div>
                {
                    props.todos.map( todo => <TodoItem todo={todo} key={todo.id} done={todo.done} onRemove={props.onRemove} onToggle={props.onToggle}></TodoItem>)
                }
            </div>
        </div>
    )
}

export default Todos;