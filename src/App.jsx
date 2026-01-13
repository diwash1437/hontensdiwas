import { Routes, Route } from 'react-router-dom';
import Restaurant from "./Recipe/Restaurant";
import { PickurusuRecipe } from './Recipe/PickurusuRecipe/PickurusuRecipe';
import { AlcholOrder } from './page/AlcholOrder';
import { VegetableSoup } from './Recipe/VegetableSoup';
import { VegetableSoupOrder } from './order/VegetableSoupOrder';
import { Lunch } from './premium/Lunch';
import NabataColtd153 from './order/NabataColtd153';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Restaurant />} />
      {/* <Route path="/nabata" element={<NabataColtd153 />} /> */}
    </Routes>
  );
}

export default App;
