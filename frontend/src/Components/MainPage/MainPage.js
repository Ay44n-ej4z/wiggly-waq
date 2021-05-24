import React from "react";
import { Nav, Card } from "react-bootstrap";
import "./MainPage.css";
import image from "../../images/newlogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import bgRemoveDoctor from "../../images/5790-removebg.png";
import ellips1 from "../../images/Ellipse 1.png";
import ellips2 from "../../images/Ellipse 2.png";
import ellips3 from "../../images/Ellipse 3.png";
import drImage from "../../images/dr-image.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"

const MainPage = () => {
  return (
    <div className="doctorPortal">
    <Header />
      <div className="doctorHeading">
        <div className="doctorNav">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link className="navLink" href="/">
                
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/about">
                
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/reviews">
                
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/dashboard">
                
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/community">
                
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/contactUs">
                
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="row mainBody">
          <div className="col-md-5">
            <div className="doctorText">
              <h1>
                Your New Smile
                <br />
                Starts Here 😀
              </h1>
              <p>
                WigglyWag is India’s trusted online veterinary health care
                consultation service provider. India’s Experienced veterinarians
                on Standby to provide you reliable online veterinary
                consultation services. Make the appointment now!
              </p>
              <Link style={{ textDecoration: "none" }} to="/appointment">
                <Button className="button">GET APPOINTMENT</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="doctorImg">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="publicServices">
        <div>
          <FontAwesomeIcon className="icon" icon={faClock} />
          <div>
            <p>Opening Hours</p>
            <small>
              Opened 24 hours
              <br />
              All days
            </small>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <div>
            <p>Visit our location</p>
            <small>Tamilnadu, India</small>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
          <div>
            <p>Contact us now</p>
            <small>+91 8978739864</small>
          </div>
        </div>
      </div>
      <div className="ourServices">
        <div>
          <p>OUR SERVICES</p>
          <h2>Services We Provide</h2>
          <div className="servicesDetails">
            <div>
              <img
                className="border"
                src="https://static.wixstatic.com/media/913019_7adb126a7762473089133c2aad36d2bb~mv2_d_4800_4800_s_4_2.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01/913019_7adb126a7762473089133c2aad36d2bb~mv2_d_4800_4800_s_4_2.webp"
                alt=""
              />
              <p>Pet Health</p>
              <p>
                Consult an online veterinary doctor for medical treatments and
                services. Pet-health is our priority, but to treat them
                professionally, keeping our best hands at service is our highest
                priority.
              </p>
            </div>
            <div>
              <img
                className="border"
                src="https://static.wixstatic.com/media/913019_eec6c8edb9594324aff3b39d69eba5a0~mv2_d_3433_3440_s_4_2.jpg/v1/fill/w_184,h_184,al_c,q_80,usm_0.66_1.00_0.01/913019_eec6c8edb9594324aff3b39d69eba5a0~mv2_d_3433_3440_s_4_2.webp"
                alt=""
              />
              <p>Pet Behaviour</p>
              <p>
                Talk to vet online and know more about your pet behavior. Our
                expertise allows us to provide you with the best advice and
                remedies to deal with your pet swinging mood or any kind of
                unexpected behavior.
              </p>
            </div>
            <div>
              <img
                className="border"
                src="https://static.wixstatic.com/media/b181e18a430c43afa6342d136860f0e8.jpg/v1/crop/x_721,y_0,w_2882,h_2882/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01/Dog%20in%20Action.webp"
                alt=""
              />
              <p>Pet Training Advice</p>
              <p>
                Almost every pet, especially dogs, needs training. But, you
                cannot blindly trust your pet into the hands of anyone randomly.
                We brief you about the best training programs & let you decide
                what is perfect for your pet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourServices">
        <div>
          <p>Why should you consult with</p>
          <h2>online veterinary doctor?</h2>
          <div className="servicesDetails">
            <div>
              <h1>"No need to travel"</h1>
              <p>
                Skip the long travels to pet clinics during pandemic and take
                hassle free online consultation for vet advice.
              </p>
            </div>
            <div>
              <h1>"No risk of infection"</h1>
              <p>
                Save your pet from infection risk at pet clinic and get him
                check through consultation only.
              </p>
            </div>
            <div>
              <h1>"Convenient"</h1>
              <p>
                Booking online vet consultation with us is as simple as signing
                to your google account.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="makeAppointment">
        <div>
          <img src={bgRemoveDoctor} alt="" />
        </div>
        <div>
          <h4>APPOINTMENT</h4>
          <h1>
            Make an Appointment <br />
            Today
          </h1>
          <p>
            chedule your online veterinary consultation today and come join our
            family of 1000+ happily satisfied members. Let us serve you and make
            you count our strengths over other available pet doctors.
          </p>
          <Link style={{ textDecoration: "none" }} to="/appointment">
            <Button className="button">GET APPOINTMENT</Button>
          </Link>
        </div>
      </div>
      <div className="testimonial">
        <div>
          <h4>Testimonial</h4>
          <h1>
            What's Our Patients <br />
            Says
          </h1>
          <div className="testimonialDetails">
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  Soft spoken doctor with great knowledge. Thank you Dr. Anirudh
                  Mittal for treating my pet.
                </Card.Text>
              </Card.Body>
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips1} alt="" />
                <div className="patientinfo">
                  <p>Nitin Sharma</p>
                  <p>Tamilnadu</p>
                </div>
              </Card.Header>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  Best quality dog feeds, all kind of accessories and the best
                  thing is that there is dog hostel too!!
                </Card.Text>
              </Card.Body>
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips2} alt="" />
                <div className="patientinfo">
                  <p>Hannah Baker</p>
                  <p>Tamilnadu</p>
                </div>
              </Card.Header>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  WigglyWag pet care doctors are very polite and down to earth.
                  They know how to keep your pet health & happy.
                </Card.Text>
              </Card.Body>
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips3} alt="" />
                <div className="patientinfo">
                  <p>Clark</p>
                  <p>Tamilnadu</p>
                </div>
              </Card.Header>
            </Card>
          </div>
        </div>
      </div>

      <div className="ourDoctors">
        <div>
          <h4>Our Doctors</h4>
          <div className="ourDoctorsDetails">
            <Card style={{ width: "21rem", border: "none" }}>
              <img style={{ height: "300px" }} src={drImage} alt="" />
              <div className="doctorsInfo">
                <p>Dr. Chris Hemsworth</p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +91 9216548976
                </p>
              </div>
            </Card>
            <Card style={{ width: "21rem", border: "none" }}>
              <img style={{ height: "300px" }} src={drImage} alt="" />
              <div className="doctorsInfo">
                <p>Dr. Domnic Toretto</p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +91 9431156751
                </p>
              </div>
            </Card>
            <Card style={{ width: "21rem", border: "none" }}>
              <img style={{ height: "300px" }} src={drImage} alt="" />
              <div className="doctorsInfo">
                <p>Dr. Paul Walker</p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +91 8654555616
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="contactUs">
        <div>
          <h4>Contact Us</h4>
          <h1>Always contact with us</h1>
          <div className="contactUsDetails">
            <div>
              <input placeholder="Email Address*" type="text" />
              <br />
              <input placeholder="Subject*" type="text" />
              <br />
              <input placeholder="Your Message*" type="text" />
              <br />
              <Button className="submitBtn">Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
