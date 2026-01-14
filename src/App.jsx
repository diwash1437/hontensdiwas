import { Routes, Route } from 'react-router-dom';
import Restaurant from "./homePage/Restaurant";
import NabataColtd153 from './order/NabataColtd153';
import './App.css'

function App() {


  return (
 <Routes>
  <Route path="/" element={<Restaurant/>}/>
  <Route path="/nabata" element={<NabataColtd153/>}/>
 </Routes>
  )
}

export default App
