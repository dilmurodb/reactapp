import { useState } from 'react';
import '../styles/grociery.css';

function Grociery() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "der Apfel"
        },
        {
            id: 2,
            checked: false,
            item: "die Bierne"
        },
        {
            id: 3,
            checked: false,
            item: "das Brotchen"
        }
    ])

    const getValue = (e) => {
        console.log(e.target.value);
        let grocieryItem = e.target.value;
        return grocieryItem;
    }
    
    const addItem = (grocieryItem) => {
       
    }

    const handleCheckbox = (id) => {
        const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked} : item);
        setItems(listItems)
    }

    return (
        <main>
            <input onChange = {getValue} type = "text" placeholder = "Enter the grociery items..." />
            <button onClick={addItem}>Add item</button>
            <ul>{items.map(item => 
                (<li className = "list" key={item.id}>
                    <input
                    onChange = {() => handleCheckbox(item.id)}
                    type = "checkbox"
                    checked = {item.checked}
                    />
                    <label>{item.item}</label>
                    <button className="button">delete</button>
                </li>))}
            </ul>
        </main>
    )
}

export default Grociery;