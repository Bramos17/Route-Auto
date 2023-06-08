import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './Service/TechnicianForm';
import TechnicianList from './Service/TechnicianList';
import ServiceAppointmentForm from './Service/ServiceAppointmentForm';
import ServiceAppointmentList from './Service/ServiceAppointmentList';
import ServiceHistoryList from './Service/ServiceHistoryList';
import VehicleModelForm from './Inventory/VehicleModelForm';
import AutomobileList from './Inventory/AutomobileList';
import AutomobileForm from './Inventory/AutomobileForm';

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
            <Route path="automobiles" element={<AutomobileList />}></Route>
            <Route path="automobile/new" element={<AutomobileForm />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
