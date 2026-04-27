import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParentLanding from './pages/ParentLanding';
import PFASProduct from './pages/PFASProduct';
import GoldenThreadProduct from './pages/GoldenThreadProduct';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentLanding />} />
        <Route path="/pfas" element={<PFASProduct />} />
        <Route path="/golden-thread" element={<GoldenThreadProduct />} />
      </Routes>
    </BrowserRouter>
  );
}