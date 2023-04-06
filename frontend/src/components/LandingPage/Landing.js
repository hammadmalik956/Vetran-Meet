import React, { useEffect } from "react";
import "./landingPage.css";
// import Slider from "./Slider";
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Landing=() => {
  const navigate=useNavigate();

  const changeNavbar=() => {
    $( document ).ready( function () {
      $( window ).scroll( function () {
        var scroll=$( window ).scrollTop();
        if ( scroll>200 ) {
          $( ".navbar" ).addClass( "shadow" );
        } else {
          $( ".navbar" ).removeClass( "shadow" );
        }
      } );
    } );
  };

  const moveToLogin=() => {
    navigate( "/login" );
  };

  const moveToSignUp=() => {
    navigate( "/signup" );
  };

  useEffect( () => {
    changeNavbar();
  }, [] );

  const cardsContent=[
    {
      img: "img1.png",
      heading: "Talented Organizations",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      img: "img2.png",
      heading: "Smart Search",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      img: "img3.png",
      heading: "Valuable Insights",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
  ];
  return (
    <>
      {
        //************  NAVBAR **************
      }
      <nav className="navbar navbar-expand-lg navbar-light py-4 fixed-top">
        <div className="container">
          <Link
            className="navbar-brand"
            to="home"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
           <h2>VateranMEET</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                {/* <a className="nav-link nav_active nav_links" href="">Home</a> */}

                <Link
                  activeClass="nav_active"
                  className="nav-link nav_links"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-4">
                {/* <a className="nav-link nav_active nav_links" href="/">Services</a> */}
                <Link
                  activeClass="nav_active"
                  className="nav-link nav_links"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              {/* <li className="nav-item mx-4"> */}
              {/* <a className="nav-link nav_active nav_links" href="/">Abous us</a> */}
              {/* <Link
                  activeClass="nav_active"
                  className="nav-link nav_links"
                  to="about_us"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  About us
                </Link> */}
              {/* </li> */}
              <li className="nav-item mx-4">
                {/* <a className="nav-link nav_active nav_links" href="/">Contact us</a> */}
                <Link
                  activeClass="nav_active"
                  className="nav-link nav_links"
                  to="contact_us"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <button className="btn add_btn blue_btn" onClick={moveToLogin}>
              {" "}
              Login
            </button>
          </div>
        </div>
      </nav>

      {
        //************  LANDING CONTENT **************
      }

      <div className="container landing" id="home">
        <div className="row">
          <div className="col-md-5 first_col">
            <h2 className="landing_text">
              <span className="highlight">VeteranMeet</span> Connect
            </h2>
            <h2 className="landing_text">With EveryOne</h2>
            <p className="landing_para">
            VeteranMeet is web based solution to connect with veterans and engage them into community
services based on their interests. A veteran which is (from Latin vetus, meaning "old") is a person who has
had long service or experience in a particular occupation or field.
            </p>
            <div>
              <button
                className="btn blue_btn get_start_btn"
                onClick={moveToSignUp}
              >
                <span className="me-2">Get Started</span>{" "}
                <FontAwesomeIcon icon={faLongArrowRight} />{" "}
              </button>
              <Link
                className="contact_btn mx-3"
                to="contact_us"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <img
                src={require( "./../../img/illustrations2.png" )}
                className="img-fluid"
                alt="landing img"
              />
            </div>
          </div>
        </div>
     
      </div>

      {
        //************  SERVICE SECTION **************
      }

      <div id="services">
        <div className="left_black_img">
          <img
            src={require( "./../../img/Group 61.png" )}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="right_black_img">
          <img
            src={require( "./../../img/Group 1667.png" )}
            alt=""
            style={{ width: "100%", height: "100%" }}

          />
        </div>
        <div id="section2" className="container">
          <div className="row text-center fw-bold fs-2">
            <div className="col-4" />
            <div className="col-4">
              <span style={{ color: "#7e1aca" }}>Fast </span>and Relaible{" "}
              <span style={{ color: "#7e1aca" }}>Recruitment</span> Solution
            </div>
            <div className="col-4" />
          </div>
          <div className="row services_bg text-center my-5">
            {cardsContent.map( ( el, i ) => (
              <div key={i} className="col-4 ">
                {" "}
                <Card
                  img={el.img}
                  heading={el.heading}
                  description={el.description}
                />{" "}
              </div>
            ) )}
          </div>
        </div>
      </div>

      {
        //************  GET STARTED SECTION **************
      }
      <div className="candidate_bg">
        <div className="container my-5">
          <div id="section3">
            <div className="row ">
              <div className="col-6 text-white" style={{ paddingTop: "9rem" }}>
                <h2 className="fw-bold mb-3">Are you a candidate?</h2>
                <small>
                  Are you interested in working for fast growing tech companies?
                  Are you able to work from the Netherlands? Do you have
                  experience and passion for: commercial, tech, product or
                  customer facing roles? Send me your contact details and
                  looking forward to connecting.
                </small>
                <div>
                  <button className="btn get_started_button mt-3 fw-bold">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="col-6 py-5" style={{ paddingLeft: "10rem" }}>
                <div className="girl_img">
                  <img
                    src={require( "./../../img/girl.png" )}
                    className=" img-fluid ps-5"
                    alt="Candidate"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {
        //************  CONTACT US **************
      }
      <div className=" container-fluid contact_us" id="contact_us">
        <div className="row mainRow">
          <div className="col-6 contact_us_left">
            <h1>Contact Us</h1>
            <p>
              If you have any question feel free to contact us, our team will
              get to you in minutes and help you with everything you need!
            </p>
          </div>
          <div className="col-6 contact_us_right">
            <form className="row ">
              <div className="col-6">
                <input type="text" id="firstName" placeholder="First name" />
              </div>
              <div className="col-6">
                <input type="text" id="lastName" placeholder="Last name" />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  id="emailAddress"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message here!"
                  defaultValue={""}
                />
              </div>
              <div className="col-12 submit_div">
                <button className="btn  blue_btn " type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {
        //************  FOOTER **************
      }
      <footer className=" text-lg-start">
        
        <div className="last_footer text-muted">
          <hr />
          <div className="container pb-3">
            <div className="row text-center">
              <div className="col-4">
                <small>Alright reserved © 2022 </small>
              </div>
              <div className="col-4">
                <small>Any Inquiry ?</small>
              </div>
              <div className="col-4">
                <small>Privacy Policy | Terms &amp; Conditions</small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
