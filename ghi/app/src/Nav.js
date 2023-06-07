import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid" data-bs-theme="blue">
        <NavLink className="navbar-brand" to="/"> CarCar  </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarSalesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sales </div>
              <div className="dropdown-menu" aria-labelledby="navbarSalesDropdown">Records
                <NavLink className="dropdown-item" to="sales/records">All sale records</NavLink>
                <NavLink className="dropdown-item" to="sales/record_history">Sale history</NavLink>
                <div className="dropdown-divider"></div>Froms
                <NavLink className="dropdown-item" to="sales/coustomer/new">Add new customer</NavLink>
                <NavLink className="dropdown-item" to="sales/salesPerson/new">Add new sales person</NavLink>
                <NavLink className="dropdown-item" to="sales/record/new">Create sales record</NavLink>
              </div>
          </li>
          </ul>
        </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" id="navbarServiceDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service</div>
            <div className="dropdown-menu" aria-labelledby="navbarSalesDropdown">Technicians
              <NavLink className="dropdown-item" to="services/technician/new"> Add A Technician </NavLink>
              <NavLink className="dropdown-item" to="services/technicians"> Technicians </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarSalesDropdown"></div>Appointments
              <NavLink className="dropdown-item" to="services/appointment/new">  Create A Service Appointment </NavLink>
              <NavLink className="dropdown-item" to="services/appointments"> Service Appointments </NavLink>
            </div>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </nav>
  );
}

export default Nav;
