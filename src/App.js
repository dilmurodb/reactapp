import './App.css';
import Header from './components/header';
import AddItem from './components/addItem';
import Main from './components/main';
import Footer from './components/footer';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, item: item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheckbox = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
  }

  const deleteItem = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div>
      <Header />
      <AddItem
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
      />
      <Main items={items}
            handleCheckbox={handleCheckbox}
            deleteItem={deleteItem}
            length={items.length}
      />
      <Footer />
    </div>
  );
}

export default App;
