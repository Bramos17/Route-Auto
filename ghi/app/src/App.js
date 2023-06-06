import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import ServiceAppointmentForm from './ServiceAppointmentForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route path="technicians/" element={<TechnicianList />}></Route>
            <Route path="technician/new" element={<TechnicianForm />}></Route>
            <Route path="appointments/new" element={<ServiceAppointmentForm />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
