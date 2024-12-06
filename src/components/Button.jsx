
const Button = () => {

    let count = 0;

    const handleClick = (e) => e.target.textContent = "Clicked!📝";

    // const handleClick2 = (name) => {
    //     console.log(`${name} Hello`)
    // }

    return <button onClick={(e) => {handleClick(e)}}>Click Me!🤯</button>
}

export default Button;