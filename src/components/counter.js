import { useState } from 'react';

function Counter() {

    const [name, setName] = useState("Elsa");
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Stephan', 'Susan', 'Cari', 'Shultz', 'Habeck'];
        const int = Math.floor(Math.random() * 5);
        setName(names[int]);
    }
    const mainStyles = {
        // height: '100vh',
        backgroundColor: 'lightgreen',
        color: 'blue'
    }

    const handleCountPlus = () => {
        setCount(count + 1)
    }

    const handleCountMinus = () => {
        setCount(count - 1)
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main style={mainStyles}>
            <p>Here is a random name: {name}!</p>
            <p>Here is the count: {count}!</p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleCountPlus}>Counter +</button>
            <button onClick={handleCountMinus}>Counter -</button>
            <button onClick={() => handleClick2("Susan")}>Click2</button>
            <button onClick={(e) => handleClick3(e)}>Click3</button>
        </main>
    )
}

export default Counter;