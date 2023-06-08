import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';



import SalesForm from './Sales/SalesForm';
import SalesList from './Sales/SalesList';
import SalesPersonList from './Sales/SalesPersonList';
import SalesPersonHistory from './Sales/SalesPersonHistory';
import CustomerForm from './Sales/CustomerForm';
import EmployeeForm from './Sales/EmployeeForm';
import RecordForm from './Sales/SalesForm';

import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import VehicleModelList from './Inventory/VehicleModelList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales/saleslist" element={< SalesList />} />
          <Route path="Sales/SalesForm" element={<SalesForm />} />
          <Route path="sales/salespersonlist" element={<SalesPersonList />} />
          <Route path="sales/salespersonhistory" element={<SalesPersonHistory  />} />
          <Route path="sales/CustomerForm" element={<CustomerForm />} />
          <Route path="sales/salesPerson/new" element={<EmployeeForm />} />
          <Route path="sales/record/new" element={<RecordForm />} />

          <Route path="inventory/manufacturers" element={<ManufacturerList />} />
          <Route path="inventory/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="inventory/VehicleModels/new" element={<VehicleModelList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
