
function ItemsList({items, handleCheckbox, deleteItem}) {


    return (
        <div>
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
        </div>
    )
}

export default ItemsList;