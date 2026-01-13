import { Routes, Route } from 'react-router-dom';
import Restaurant from "./Recipe/Restaurant";


function App() {
  return (
    <Routes>
      <Route path="/hontenss/" element={<Restaurant />} />
      {/* <Route path="/nabata" element={<NabataColtd153 />} /> */}
    </Routes>
  );
}

export default App;
