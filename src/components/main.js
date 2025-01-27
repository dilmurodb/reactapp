import Counter from './counter';
import Grociery from './grociery';


function Main({items, handleCheckbox, deleteItem, length}) {

    return (
        <main>
            <Counter length={length} />
            <Grociery items={items}
                      handleCheckbox={handleCheckbox}
                      deleteItem={deleteItem}
            />
        </main>
    )
}

export default Main;