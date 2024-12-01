import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import AddPhone from './components/AddPhone';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        <Route path="/add-phone" element={<AddPhone />} />
      </Routes>
    </div>
  );
}

export default App;
