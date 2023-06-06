import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// Sales imports
import RecordList from './sales/RecordList';
import RecordHistory from './sales/RecordHistory';
import CustomerForm from './sales/CustomerForm';
import EmployeeForm from './sales/EmployeeForm';
import RecordForm from './sales/RecordForm';



function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Nav />
      {/* Main content */}
      <div className="container">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<MainPage />} />
          {/* Sales Routes */}
          <Route path="/sales" element={<RecordList />} />
          <Route path="/sales_history" element={<RecordHistory />} />
          <Route path="/new_customer" element={<CustomerForm />} />
          <Route path="/new_sales_person" element={<EmployeeForm />} />
          <Route path="/new_sale" element={<RecordForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
