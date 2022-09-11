import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4"></section>
        <a
          href="https://www.facebook.com/9autham/"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="facebook"
            style={{ color: "#61dafb", padding: "5px" }}
          />
        </a>
        <a
          href="https://www.instagram.com/9autham/"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="instagram"
            style={{ color: "#61dafb", padding: "5px" }}
          />
        </a>
        <a
          href="https://twitter.com/9autham"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="twitter"
            style={{ color: "#61dafb", padding: "5px" }}
          />
        </a>
        <a
          href="mailto: gautam9.2016@gmail.com"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="google"
            style={{ color: "#61dafb", padding: "5px" }}
          />
        </a>
        <a
          href="https://github.com/9autham"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="linkedin"
            style={{ color: "#61dafb", padding: "5px" }}
          />
        </a>
        <a
          href="https://github.com/9autham"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="github"
            style={{ color: "#61dafb", padding: "5px" }}
          />
        </a>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        style={{ color: "#61dafb" }}
      >
        © 2022 Copyright:
        <a style={{ color: "#61dafb" }} href="https://linktr.ee/9autham">
          9autham
          <i class="fab fa-pagelines" style={{ color: "#61dafb" }}></i>
        </a>
      </div>
    </MDBFooter>
  );
}
