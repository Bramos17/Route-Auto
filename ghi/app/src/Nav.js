import { Link } from "react-router-dom";
import './index.css'
import steeringwheel from './Components/images/steeringwheel.png';

console.log(steeringwheel);

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" id="NavBar" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> <img id="stearingwheel" width="40px" height="auto" src={steeringwheel} alt="Steering" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarSalesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sales </div>
              <div className="dropdown-menu" aria-labelledby="navbarSalesDropdown">Sales
                <Link className="dropdown-item" to="Sales">All Sales</Link>
                <Link className="dropdown-item" to="Sales/new"> New Sale</Link>
                <div className="dropdown-divider"></div>Sales
                <Link className="dropdown-item" to="Salesperson">Sales Staff</Link>
                <Link className="dropdown-item" to="salesperson/new"> New Sales Employee</Link>
                <Link className="dropdown-item" to="salesperson/history">Sales Person History</Link>
                <div className="dropdown-divider"></div>Customers
                <Link className="dropdown-item" to="customer">Coustomer List</Link>
                <Link className="dropdown-item" to="customer/new">New Customer</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarInventoryDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Technicians </div>
              <div className="dropdown-menu" aria-labelledby="navbarServiceDropdown">Technicians
                <Link className="dropdown-item" to="technicians">Technicians</Link>
                <Link className="dropdown-item" to="technicians/new">Add A Technician</Link>
              <div className="dropdown-menu" aria-labelledby="navbarServiceDropdown"></div>Appointments
                <Link className="dropdown-item" to="appointments">Service Appointments</Link>
                <Link className="dropdown-item" to="appointments/new">Create A Service Appointment</Link>
                <Link className="dropdown-item" to="appointments/history">Service History</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarServiceDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inventory</div>
              <div className="dropdown-menu" aria-labelledby="navbarInventoryDropdown"> Inventory
                <Link className="dropdown-item" to="manufacturers">Manufacturers</Link>
                <Link className="dropdown-item" to="manufacturers/new">New Manufacture</Link>
                <div className="dropdown-divider"></div>Vehicle Models
                <Link className="dropdown-item" to="vehicleModels">Modles List</Link>
                <Link className="dropdown-item" to="vehicleModels/new">Create A Vehicle Model</Link>
              <div className="dropdown-menu" aria-labelledby="navbarInventoryDropdown"></div>Automobiles
                <Link className="dropdown-item" to="automobiles">Automobiles</Link>
                <Link className="dropdown-item" to="automobiles/new">Add An Automobile To Inventory</Link>
              </div>
            </li>
          </ul>
          </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}


export default Nav;
