import "./styles.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ "background-color": "#100c24", color: "#61dafb" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ "background-color": "#100c24", color: "#61dafb" }}
            href="#"
          >
            Admirer {<MDBIcon fab icon="react" style={{ color: "#61dafb" }} />}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item nav">
                <NavLink className="nav-link active" to="">
                  {
                    <i
                      class="fas fa-home"
                      style={{
                        "background-color": "#100c24",
                        color: "#61dafb"
                      }}
                    ></i>
                  }
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="contactus"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  ContactUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="AboutUs"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  AboutUs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<TodoList />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
