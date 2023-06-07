import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';

import TechnicianList from './service/TechnicianList';
import TechnicianForm from './service/TechnicianForm';
import ServiceAppointmentList from './service/ServiceAppointmentList';
import ServiceAppointmentForm from './service/ServiceAppointmentForm';

import RecordList from './sales/RecordList';
import RecordHistory from './sales/RecordHistory';
import CustomerForm from './sales/CustomerForm';
import EmployeeForm from './sales/EmployeeForm';
import RecordForm from './sales/RecordForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians" element={<TechnicianList />} />
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="appointments" element={<ServiceAppointmentList />} />
          <Route path="appointment/new" element={<ServiceAppointmentForm />} />
          <Route path="records" element={<RecordList />} />
          <Route path="record_history" element={<RecordHistory />} />
          <Route path="customer/new" element={<CustomerForm />} />
          <Route path="salesPerson/new" element={<EmployeeForm />} />
          <Route path="record/new" element={<RecordForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
