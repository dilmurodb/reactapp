
import '../styles/grociery.css';
import ItemsList from './itemsList'

function Grociery({items, handleCheckbox, deleteItem}) {
    

    return (
        <main>
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