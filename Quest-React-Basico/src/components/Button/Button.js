const showLabel = (label) => {
    alert(`The label of the button is ${label}`)
}

const Button = (props) => {
    return <button onClick={() => showLabel(props.label)}>Click here to know the label</button>        
}

export default Button