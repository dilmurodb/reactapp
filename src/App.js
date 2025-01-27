import './App.css';
import Header from './components/header';
import AddItem from './components/addItem';
import Main from './components/main';
import Footer from './components/footer';
import { useState } from 'react';

function App() {

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

  const [newItem, setNewItem] = useState('');

  const handleCheckbox = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems)
  }

  const deleteItem = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    console.log('submitted')
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
