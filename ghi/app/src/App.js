import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';


import RecordList from './sales/RecordList';
import RecordHistory from './sales/RecordHistory';
import CustomerForm from './sales/CustomerForm';
import EmployeeForm from './sales/StaffForm';
import RecordForm from './sales/RecordForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/records" element={<RecordList />} />
          <Route path="/record_history" element={<RecordHistory />} />
          <Route path="/new_customer" element={<CustomerForm />} />
          <Route path="/new_sales_person" element={<EmployeeForm />} />
          <Route path="/new_record" element={<RecordForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
