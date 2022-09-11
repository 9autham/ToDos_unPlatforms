import React from "react";
import MBDFooter from "../components/Football";
import Image from "../components/Test";
import imageOne from "../components/images/Profile.jpeg";
import { MDBIcon } from "mdb-react-ui-kit";
function AboutUs() {
  return (
    <div className="text-center">
      <p className="display-2 text-info">Welcome to my app</p>
      {/* <img scr={imageOne} className="w-50" alt="img" /> */}
      <Image src={imageOne} className="w-50" alt="img" />
      <p className="lead">
        I am <b>KURUVA GAUTHAM KUMAR</b> <i class="fab fa-pagelines"></i>,
        Passionate about Coding, with good problem-solving skills and ability to
        perform well in a team, pursuing my Bachelor of Engineering in
        Electronics and Communications from VNR Vignana Jyothi Institute of
        Engineering & Technology.
        <br />I am a React{" "}
        {<MDBIcon fab icon="react" style={{ color: "#61dafb" }} />} Developer
        Aspirant. I have coding since 2 years, Done many projects like TinDog,
        Navigation, Die Game & ToDo-List using HTML, CSS, JS, React JS &
        BootStrap{" "}
        <a
          href="https://github.com/9autham"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="github"
            style={{ color: "black", padding: "5px" }}
          />
        </a>
        . Below are my Social Media handles feel free to contact.
      </p>

      <MBDFooter />
    </div>
  );
}
export default AboutUs;
