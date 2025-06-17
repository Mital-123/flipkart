import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonCom from './Component/ButtonCom';
import FlipKartPdfSplitter from './Component/FlipKartPdfSplitter ';
import MeeshoPdfSplitter from './Component/MeeshoPdfSplitter';
import AmazonPdfSplitter from './Component/AmazonPdfSplitter';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<ButtonCom />} />
          <Route path="/flipkart" element={<FlipKartPdfSplitter />} />
          <Route path="/meesho" element={<MeeshoPdfSplitter />} />
          <Route path="/amazon" element={<AmazonPdfSplitter />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;