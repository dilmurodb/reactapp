
import '../styles/grociery.css';

function Grociery({items, handleCheckbox, deleteItem}) {

    const getValue = (e) => {
        console.log(e.target.value);
        let grocieryItem = e.target.value;
        return grocieryItem;
    }
    
    const addItem = (grocieryItem) => {
       
    }

    return (
        <main>
            <input onChange = {getValue} type = "text" placeholder = "Enter the grociery items..." />
            <button onClick={addItem}>Add item</button>
            { items.length ? 
                (
                    <ul>{items.map(item => 
                        (<li className = "list" key={item.id}>
                            <input
                            onChange = {() => handleCheckbox(item.id)}
                            type = "checkbox"
                            checked = {item.checked}
                            />
                            <label style = {(item.checked) ? { textDecoration: 'line-through'} : null}>{item.item}</label>
                            <button onClick = {() => deleteItem(item.id)} className="button">delete</button>
                        </li>))}
                    </ul> 
                ) : (<p>Your list is empty</p>)
            }
        </main>
    )
}

export default Grociery;