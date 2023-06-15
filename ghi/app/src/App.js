import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Login from './Accounts/login';
import MainPage from './MainPage';
import {
  SalesForm, SalesList, SalesPersonList, SalesPersonHistory, CustomerForm, CustomerList, EmployeeForm, ManufacturerList
  , ManufacturerForm, VehicleModelForm, VehicleModelList, AutomobileList, AutomobileForm, TechnicianForm, TechnicianList, ServiceAppointmentForm
  , ServiceAppointmentList, ServiceHistoryList
} from './components';


function App() {
    const [token, setToken] = useState();

    if(!token) {
      return <Login setToken={setToken} />
    }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<ServiceAppointmentList />} />
            <Route path="new" element={<ServiceAppointmentForm />} />
            <Route path="history" element={<ServiceHistoryList />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
            <Route index element={<ManufacturerList />} />
          </Route>
          <Route path="vehicleModels">
            <Route index element={<VehicleModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="customer">
            <Route index element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList />} />
            <Route path="new" element={<SalesForm />} />
          </Route>
          <Route path="salesperson">
            <Route index element={<SalesPersonList />} />
            <Route path="new" element={<EmployeeForm />} />
            <Route path="history" element={<SalesPersonHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
