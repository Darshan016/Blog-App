import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://images7.alphacoders.com/129/1299888.png"
          alt=""
        />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
