
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import PostBooking from './components/PostBooking';
function App() {
  return (
    <div className="App">
     Demo Gas Booking
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="postbooking" element={< PostBooking/>} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;