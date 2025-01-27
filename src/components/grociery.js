
import '../styles/grociery.css';
import ItemsList from './itemsList'

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
                   <ItemsList items={items}
                              handleCheckbox={handleCheckbox}
                              deleteItem={deleteItem}
                    /> 
                ) : (<p>Your list is empty</p>)
            }
        </main>
    )
}

export default Grociery;