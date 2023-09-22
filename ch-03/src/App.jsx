import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import HalamanUtama from './pages/HalamanUtama'
import HalamanAdd from './pages/HalamanAdd'
import NotFound from './components/NotFound'
import Data from "./data/data.json"


localStorage.setItem("Data", JSON.stringify(Data));

const getDataItem = () => {
  let Data = localStorage.getItem("Data");
  if (Data) {
    return (Data = JSON.parse(localStorage.getItem("Data")));
  } else {
    return [];
  }
};

export default function App() {

  const [items, setItems] = useState(getDataItem());
  const [name, setName] = useState('');
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(items));
  }, [items]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HalamanUtama
          // name={name}
          items={items}
          setItems={setItems}
          // setName={setName}
        />} />
        <Route path='/halaman-add' element={<HalamanAdd
          name={name}
          items={items}
          setItems={setItems}
          setName={setName}
        />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
