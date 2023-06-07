import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceHistoryList from './ServiceHistoryList';
import VehicleModelForm from './VehicleModelForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route path="technicians" element={<TechnicianList />}></Route>
            <Route path="technician/new" element={<TechnicianForm />}></Route>
            <Route path="appointments" element={<ServiceAppointmentList />}></Route>
            <Route path="appointment/new" element={<ServiceAppointmentForm />}></Route>
            <Route path="history" element={<ServiceHistoryList />}></Route>
          </Route>
          <Route path="inventory">
            <Route path="vehicle-model/new" element={<VehicleModelForm />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
