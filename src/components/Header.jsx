import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand nav-bar-custom">
        <div className="nav navbar-nav">
          <NavLink className="nav-item nav-link nav-route" to="/">
            Home
          </NavLink>
        </div>
      </nav>
    </header>
  );
}