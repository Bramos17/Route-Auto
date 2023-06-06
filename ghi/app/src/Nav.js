import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarSalesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sales
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarSalesDropdown">
                <NavLink className="dropdown-item" to="/records">All sale records</NavLink>
                <NavLink className="dropdown-item" to="/record_history">Sale history</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/new_customer">Add new customer</NavLink>
                <NavLink className="dropdown-item" to="/new_sales_person">Add new sales person</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/new_record">Create sales record</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
