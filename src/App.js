import './App.css';
import Header from './components/header';
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

  const handleCheckbox = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems)
  }

  const deleteItem = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  return (
    <div>
      <Header />
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
