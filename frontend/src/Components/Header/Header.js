import React from "react";
import image from '../../images/myIcon.png'
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { auth } from "../../firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{user}, dispatch] = useStateValue()
  const handleAuthentication = () => {
    if (user) {
     auth.signOut()
    }
 }

  return (
    <div className="header">
      <Navbar className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="nav__brand">
          <img
            className="logo"
            src= {image}
            alt=""
          />
          WigglyWag
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link className="navLink" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/userinfo">
              User Info
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/dashboard">
              Doctors Zone
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/community">
              Community
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/contactUs">
              Contact Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" href="/login">
              <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
