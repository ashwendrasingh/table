import React from "react";
import { Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="nav-link" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        < Link className="nav-link" to="/">Home </ Link>
      </li>
      <li className="nav-item active">
        < Link className="nav-link" to="/about">about</ Link>
      </li>
      <li className="nav-item active">
        < Link className="nav-link" to="/login">login</ Link>
      </li>
      <li className="nav-item active">
        < Link className="nav-link" to="/signup">signup</ Link>
      </li>
      <li className="nav-item active">
        < Link className="nav-link " to="/contact">contact</ Link>
      </li>
    </ul>
  
  </div>
</nav>
    </>
  );
}

export default Navbar;
