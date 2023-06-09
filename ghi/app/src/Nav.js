import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
      <div className="container-fluid" data-bs-theme="blue">
        <NavLink className="navbar-brand" to="/"> CarCar  </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarSalesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sales </div>
              <div className="dropdown-menu" aria-labelledby="navbarSalesDropdown">Records
                <NavLink className="dropdown-item" to="sales/SalesList">All Sales records</NavLink>
                <NavLink className="dropdown-item" to="sales/SalesPersonHistory">Sales Person History</NavLink>
                <NavLink className="dropdown-item" to="sales/SalesPersonList">Sales Staff</NavLink>
                <div className="dropdown-divider"></div>Froms
                <NavLink className="dropdown-item" to="sales/CustomerForm">New Customer</NavLink>
                <NavLink className="dropdown-item" to="sales/CustomerList">Coustomer List</NavLink>
                <NavLink className="dropdown-item" to="sales/salesPerson/new"> New Sales Employee</NavLink>
                <NavLink className="dropdown-item" to="Sales/SalesForm"> New Sale</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarInventoryDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Inventory </div>
              <div className="dropdown-menu" aria-labelledby="navbarInventoryDropdown"> Inventory
                <NavLink className="dropdown-item" to="Manufacturer/manufacturers">Manufacturers</NavLink>
                <NavLink className="dropdown-item" to="Manufacturer/manufacturers/new">New Manufacture</NavLink>
                <div className="dropdown-divider"></div>Vehicle Models
                <NavLink className="dropdown-item" to="Vehicle/VehicleModels/new">New Models</NavLink>
                <NavLink className="dropdown-item" to="inventory/vehicle-model/new">Create A Vehicle Model</NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarInventoryDropdown"></div>Automobiles
                <NavLink className="dropdown-item" to="inventory/automobiles">Automobiles</NavLink>
                <NavLink className="dropdown-item" to="inventory/automobile/new">Add An Automobile To Inventory</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarServiceDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service</div>
              <div className="dropdown-menu" aria-labelledby="navbarServiceDropdown">Technicians
                <NavLink className="dropdown-item" to="services/technicians">Technicians</NavLink>
                <NavLink className="dropdown-item" to="services/technician/new">Add A Technician</NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarServiceDropdown"></div>Appointments
                <NavLink className="dropdown-item" to="services/appointments">Service Appointments</NavLink>
                <NavLink className="dropdown-item" to="services/appointment/new">Create A Service Appointment</NavLink>
                <NavLink className="dropdown-item" to="services/history">Service History</NavLink>
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
