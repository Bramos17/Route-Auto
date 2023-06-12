import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';


//sales
import SalesForm from './sales/SalesForm';
import SalesList from './sales/SalesList';
import SalesPersonList from './sales/SalesPersonList';
import SalesPersonHistory from './sales/SalesPersonHistory';
import CustomerForm from './sales/CustomerForm';
import CustomerList from './sales/CustomerList';
import EmployeeForm from './sales/EmployeeForm';
// Inventory
import ManufacturerList from './Manufacturer/ManufacturerList';
import ManufacturerForm from './Manufacturer/ManufacturerForm';
import VehicleModelForm from './Inventory/VehicleModelForm';
import VehicleModelList from './Inventory/VehicleModelList'
import AutomobileList from './Inventory/AutomobileList';
import AutomobileForm from './Inventory/AutomobileForm';

// Service
import TechnicianForm from './Service/TechnicianForm';
import TechnicianList from './Service/TechnicianList';
import ServiceAppointmentForm from './Service/ServiceAppointmentForm';
import ServiceAppointmentList from './Service/ServiceAppointmentList';
import ServiceHistoryList from './Service/ServiceHistoryList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route path="saleslist" element={< SalesList />} />
            <Route path="SalesForm" element={<SalesForm />} />
            <Route path="salespersonlist" element={<SalesPersonList />} />
            <Route path="salespersonhistory" element={<SalesPersonHistory  />} />
            <Route path="CustomerForm" element={<CustomerForm />} />
            <Route path="CustomerList" element={<CustomerList />} />
            <Route path="salesPerson/new" element={<EmployeeForm />} />
          </Route>
          <Route path="Manufacturer/manufacturers" element={<ManufacturerList />} />
          <Route path="Manufacturer/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="Vehicle/VehicleModels/new" element={<VehicleModelList />} />

          <Route path="services">
            <Route path="technicians" element={<TechnicianList />}></Route>
            <Route path="technician/new" element={<TechnicianForm />}></Route>
            <Route path="appointments" element={<ServiceAppointmentList />}></Route>
            <Route path="appointment/new" element={<ServiceAppointmentForm />}></Route>
            <Route path="history" element={<ServiceHistoryList />}></Route>
          </Route>

          <Route path="inventory">
            <Route path="VehicleModelsList" element={<VehicleModelList />} />
            <Route path="vehicle-model/new" element={<VehicleModelForm />}></Route>
            <Route path="automobiles" element={<AutomobileList />}></Route>
            <Route path="automobile/new" element={<AutomobileForm />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
