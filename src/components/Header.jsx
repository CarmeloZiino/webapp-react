import { NavLink } from "react-router-dom";
import cinemaKarme from "../assets/imgs/brandKarme.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand nav-bar-custom">
        <div className="nav navbar-nav d-flex align-items-center">
          <NavLink className="navbar-brand" to="/">
            <img className="cinemaKarme" src={cinemaKarme} alt="brand" width={75}/>
          </NavLink>
          <NavLink className="nav-item nav-link nav-route" to="/">
            Home
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
