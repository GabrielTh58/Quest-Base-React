const CustomParagraph = ({colorText, children}) => {
    return <p style={{color: colorText}}> {children.toUpperCase()} </p>
}

CustomParagraph.defaultProps = {
    colorText: 'red'
}

export default CustomParagraph