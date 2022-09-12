import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { GrFormClose } from "react-icons/gr";
import { MdRefresh } from "react-icons/md";

const NavBar = ({ contact, emptyInputs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.setAttribute("download", name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div className="nav-container">
      <Navbar
        expand={"md"}
        style={contact ? { borderBottom: "1px solid #e5e5e5" } : {}}
        className={contact ? "hide-nav" : ""}
      >
        {!contact && (
          <NavbarBrand style={{ marginLeft: "2rem" }} href="/">
            <img
              style={{ width: "6rem" }}
              src={require("./images/t.png")}
              alt="Logo"
            />
          </NavbarBrand>
        )}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="marginTop">
          <Nav
            className={"flexed-left"}
            style={contact ? { marginRight: "3.5rem" } : {}}
            navbar
          >
            {contact ? (
              <div className="hide-btns">
                <NavItem>
                  <NavLink
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "1.5rem",
                      position: "relative",
                      top: "1px",
                    }}
                    onClick={emptyInputs}
                  >
                    <MdRefresh />
                  </NavLink>
                </NavItem>
                <NavItem href="/">
                  <NavLink
                    style={{ fontSize: "1.9rem", cursor: "pointer" }}
                    onClick={() => (window.location.href = "/")}
                  >
                    <GrFormClose />
                  </NavLink>
                </NavItem>
              </div>
            ) : (
              <React.Fragment>
                <NavItem>
                  <NavLink
                    // disabled
                    href="#"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      marginTop: ".2rem",
                    }}
                    onClick={() => downloadURI(require("./WaelHamze-Resume.pdf"), "WaelHamze-Resume.pdf")}
                  >
                    Wael Hamze
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">
                    <button
                      className="violet-btn"
                      style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
                    >
                      Say Hello
                    </button>
                  </NavLink>
                </NavItem>
              </React.Fragment>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
