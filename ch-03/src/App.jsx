import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HalamanUtama from './pages/HalamanUtama'
import HalamanAdd from './pages/HalamanAdd'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HalamanUtama />} />
        <Route path='/halaman-add' element={<HalamanAdd />} />

        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}
