import { Routes, Route } from 'react-router-dom';
import Restaurant from "./Recipe/Restaurant";
import './App.css'

function App() {


  return (
 <Routes>
  <Route path="/" element={<Restaurant/>}/>
 </Routes>
  )
}

export default App
