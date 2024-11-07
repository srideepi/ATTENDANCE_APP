import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  
import Student from './pages/Student';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
