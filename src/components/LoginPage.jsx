import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/netflix-logo-png-2562.png";
import { FaRegEye } from "react-icons/fa6";
import Footer from "./Footer";
import "./poppins.css";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const [pass, showPass] = useState(false);
  const togglePass = () => {
    showPass(!pass);
  };
  // const handleSubmit = (e) => {};

  // const Login = () => {
  //   const [currentState, setCurrentState] = useState("Sign Up");
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  //   const updateFormData = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevValue) => ({
  //       ...prevValue,
  //       [name]: value,
  //     }));
  //   };
  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch(
  //     "http://localhost:3000/signup/postLoginData",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     }
  //   );
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   console.log("Data Added Successfully...");
  // };

  return (
    <>
      <div className="main">
        <div className="bgImg">
          <img
            className="bg"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
            srcset="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg 1800w"
            alt=""
          />
          <img className="headLogo" src={logo} alt="" />
          <div className="Content">
            <form>
              <h1 className="SI text-3xl font-semibold mb-5">Sign In</h1>
              <input
                type="text"
                placeholder="Email or Mobile Number"
                className="input"
              />
              <div className="passBox ">
                <input
                  type={pass ? "text" : "password"}
                  placeholder="Password"
                  className="input-pass"
                />
                <FaRegEye className="eye-toggle" onClick={togglePass} />
              </div>
              <br />
              <button className="LoginB" type="submit">
                <NavLink to="/">Sign in</NavLink>
              </button>
              <br />
              <h3 className="or">OR</h3>
              <br />
              <button className="Sign-in-code">Use a sign-in code</button>
              <br />
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
              <br />
              <div className="remember-me">
                <input type="checkbox" className="rem-box" />
                <p
                  style={{
                    marginLeft: "2%",
                    marginTop: "5%",
                    marginBottom: "0%",
                  }}
                >
                  Remember me
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    color: "darkgrey",
                    marginLeft: "9%",
                    marginTop: "5%",
                  }}
                >
                  New to Netflix?
                  <a href="#" className="newSign">
                    {" "}
                    Sign up now.
                  </a>
                </p>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "darkgrey",
                  marginLeft: "9%",
                  marginTop: "5%",
                }}
              >
                <p>
                  This page is protected by Google reCAPTCHA to
                  <br /> ensure you're not a bot.
                  <a className="lrnMore" href="#">
                    {" "}
                    Learn more.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
