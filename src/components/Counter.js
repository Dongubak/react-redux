function Counter(props) {
    return(
        <div>
            <h1>{ props.number }</h1>
            <div>
                <button onClick={ props.onIncrease }> +1</button>
                <button onClick={ props.onDecrease }>-1</button>
            </div>
        </div>

    )
}

export default Counter;