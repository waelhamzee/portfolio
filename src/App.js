import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { MdOutlineFlipToFront } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import NavBar from "./NavBar";
import FormContainer from "./FormContainer";

function App() {
  if (window.location.pathname === "/contact") {
    return <FormContainer />;
  } else {
    return (
      <div className="App">
        <Card style={{ width: "100%", height: "100vh", border: "none" }}>
          <CardBody style={{ padding: "0" }}>
            <NavBar style={{ padding: "2rem" }} />
            <Card className="card-helper-1">
              <CardTitle
                tag={"h1"}
                style={{ marginBottom: "1.5rem", fontWeight: "bolder" }}
              >
                Full-Stack web developer.
              </CardTitle>
              <CardTitle tag={"h5"} style={{ color: "rgba(10, 10, 10, 0.9)" }}>
                I code, and I love what I do.
              </CardTitle>
              <CardBody>
                <div className="avatar-container">
                  <img
                    src="https://mattfarley.ca/img/mf-avatar.svg"
                    alt="Wael"
                  />
                </div>
                <div className="image-container-1">
                  <img
                    src="https://mattfarley.ca/img/hero-devices.svg"
                    alt="Wael"
                  />
                </div>
              </CardBody>
            </Card>
            <Card className="card-helper-2">
              <CardTitle
                tag={"h3"}
                style={{ marginBottom: "1.5rem", fontWeight: "bold" }}
              >
                Hi, I’m Wael. Nice to meet you.
              </CardTitle>
              <CardBody>
                <div className="par-1">
                  <p>
                    Since beginning my journey as a web developer, and I have
                    been fascinated about this particular technology. I have
                    started early to satisfy my ambitions. . I'm quietly
                    confident, naturally curious, and perpetually working on
                    improving myself one day at a time.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="card-helper-X">
              <CardBody className="card-body-helper">
                <Card>
                  <CardBody
                    style={{
                      textAlign: "center",
                      fontFamily: '"eurostile", sans-serif',
                    }}
                  >
                    <div className="block-container">
                      <button className="svg-icon-button">
                        <MdOutlineFlipToFront />
                      </button>
                      <h5
                        style={{
                          fontWeight: "bolder",
                          fontSize: "1.5rem",
                          marginBottom: "2rem",
                        }}
                      >
                        Frontend Developer
                      </h5>
                      <p
                        style={{ lineHeight: "1.7", letterSpacing: "0.05rem" }}
                      >
                        I enjoy to code things from my own imagination, and to
                        bring ideas to life in the browser.
                      </p>
                    </div>
                    <div style={{ paddingBottom: "2rem" }}>
                      <p style={{ color: "#6E07F3", fontWeight: "bold" }}>
                        Languages I speak:
                      </p>
                      <p>HTML, CSS, Sass, Git, Javascript, React.</p>
                    </div>
                    <div style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
                      <p>Dev Tools:</p>
                      <p>VS Code</p>
                      <p>Github</p>
                      <p>Reactstrap</p>
                      <p>Bootstrap</p>
                      <p>Terminal</p>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody
                    style={{
                      textAlign: "center",
                      fontFamily: '"eurostile", sans-serif',
                    }}
                  >
                    <div className="block-container">
                      <button className="svg-icon-button">
                        <MdOutlineFlipToFront />
                      </button>
                      <h5
                        style={{
                          fontWeight: "bolder",
                          fontSize: "1.5rem",
                          marginBottom: "2rem",
                        }}
                      >
                        Backend Developer
                      </h5>
                      <p
                        style={{ lineHeight: "1.7", letterSpacing: "0.05rem" }}
                      >
                        I always liked to know what happened behind the scenes,
                        so I dug into it.
                      </p>
                    </div>
                    <div style={{ paddingBottom: "2rem" }}>
                      <p style={{ color: "#6E07F3", fontWeight: "bold" }}>
                        Languages/Tools I speak:
                      </p>
                      <p>Node.js, MongodDB, Express.</p>
                    </div>
                    <div style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
                      <p>Additions :</p>
                      <p>Postman</p>
                      <p>REST API's</p>
                      <p>API/Query Latency</p>
                      <p>Database Management</p>
                    </div>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
            <Card style={{ marginTop: "5rem", border: "none" }}>
              <CardTitle
                tag={"h1"}
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                My Projects :
              </CardTitle>
              <CardBody className="card-body-helper-2">
                {/* <div href="https://waelhamze.netlify.app"> */}
                <Card
                  style={{
                    marginRight: "1rem",
                  }}
                  className="card-helper-3"
                  onClick={() =>
                    (window.open("https://e-commerce-shoe-store.netlify.app/"))
                  }
                >
                  <img src={require("./images/ecommerce.png")} alt="Sample" />
                  <CardBody>
                    <CardTitle tag="h5">E-commerce store.</CardTitle>
                    <CardText>A demo e-commerce store.</CardText>
                  </CardBody>
                </Card>
                {/* </div> */}
                {/* <div href="https://react-telegram-clone.netlify.app"> */}
                <Card
                  className="card-helper-3"
                  onClick={() =>
                    (window.open("https://react-telegram-clone.netlify.app/"))
                  }
                >
                  <img alt="Sample" src={require("./images/chat.png")} />
                  <CardBody>
                    <CardTitle tag="h5">Real time chat app.</CardTitle>
                    <CardText>A real time chat/video web app.</CardText>
                  </CardBody>
                </Card>
                {/* </div> */}
              </CardBody>
            </Card>
            <Card
              className="card-booster"
            >
              <CardTitle tag={"h2"} style={{ marginBottom: "1.5rem" }}>
                Interested in collaborating with me?
              </CardTitle>
              <CardSubtitle tag={"h5"} style={{ marginBottom: "3rem" }}>
                I’m always open to discussing projects and partnership
                opportunities.
              </CardSubtitle>
              <CardBody>
                <button
                  className="violet-btn add-btn-on"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Start a conversation
                </button>
              </CardBody>
            </Card>
          </CardBody>
          <CardFooter style={{ background: "#6e07f3", textAlign: "center" }}>
            <div style={{ marginTop: "10rem", color: "white" }}>
              <img
                className="logo-2"
                src={require("./images/logo2.png")}
                alt="Logo"
              />
              <p
                style={{
                  fontSize: "1.5rem",
                  opacity: ".8",
                  marginBottom: "3rem",
                }}
              >
                Living, learning, & leveling up one day at a time.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  justifyContent: "center",
                }}
              >
                <a
                  className="social-btn"
                  href="https://instagram.com/wael_hamzee"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  className="social-btn"
                  href="https://www.linkedin.com/in/wael-hamze/"
                >
                  <FiLinkedin />
                </a>
                <a
                  className="social-btn"
                  href="https://instagram.com/wael_hamzee"
                >
                  <FiMail />
                </a>
              </div>
              <p
                style={{
                  marginTop: "2rem",
                  marginBottom: "3rem",
                  fontSize: "1.2rem",
                  opacity: ".8",
                }}
              >
                Handcrafted by me
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default App;
