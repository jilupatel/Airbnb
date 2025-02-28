import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import MainBoilerplate from "../components/layout/MainBoilerplate.js";
import NoAuth from "../guard/RequireAuth.js";
import "../components/styles/login.css";
import "../components/styles/signup.css";

const clientId = process.env.REACT_APP_CLIENT_ID;
const Login = () => {
  const [loginMethod, setLoginMethod] = useState("email"); // "email" or "phone"
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Google Login Success
  const handleGoogleLoginSuccess = async (response) => {
    const token = response.credential;

    try {
      // Decode user info (optional)
      const decoded = jwtDecode(token);
      console.log("Google User Info:", decoded);

      // Send token to backend
      const res = await axios.post("http://localhost:8080/api/google-login", {
        token,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("loginMethod", "google");
        navigate("/listings");
      } else {
        setError("Failed to login with Google.");
      }
    } catch (err) {
      console.error("Google login failed:", err);
      setError("An error occurred while logging in with Google.");
    }
  };

  // Handle OTP Sending
  const sendOTP = async () => {
    try {
      // Verify if username and phone number exist in the database
      const verifyResponse = await axios.post(
        "http://localhost:8080/api/verify-username-phone",
        {
          username,
          phoneNumber,
        }
      );

      if (verifyResponse.status === 200) {
        // If verified, send OTP
        const response = await axios.post(
          "http://localhost:8080/api/send-otp",
          {
            phoneNumber,
          }
        );
        if (response.status === 200) {
          setOtpSent(true);
          alert("OTP sent to your phone number");
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } else {
        setError("Username or Phone Number is not found.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  // Handle Login Submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginMethod === "email") {
      // Email-based login
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          username,
          password,
          email,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("loginMethod", "email");
          navigate("/listings");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      }
    } else if (loginMethod === "phone" && otp) {
      // Phone Number-based login
      try {
        const response = await axios.post(
          "http://localhost:8080/api/login/otp",
          {
            phoneNumber,
            otp,
          }
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", username); // Store the username
          localStorage.setItem("phoneNumber", phoneNumber); // Store the phone number
          localStorage.setItem("loginMethod", "phone");
          navigate("/listings");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <MainBoilerplate>
        <NoAuth>
          <div
            className="form-container"
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <h1>User Login</h1>
            <form
              onSubmit={handleLogin}
              className="needs-validation"
              noValidate
            >
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>

              {loginMethod === "email" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      style={{ borderColor: "black" }}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      style={{ borderColor: "black" }}
                      placeholder="Password"
                      required
                    />
                  </div>
                </>
              )}

              {loginMethod === "phone" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  {!otpSent ? (
                    <button
                      type="button"
                      onClick={sendOTP}
                      className="btn btn-primary"
                      style={{ marginBottom: "10px" }}
                    >
                      Send OTP
                    </button>
                  ) : (
                    <>
                      <div className="mb-3">
                        <label className="form-label">Enter OTP</label>
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="form-control"
                          style={{ borderColor: "black" }}
                          placeholder="OTP"
                          required
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              <div class="col-auto">
                <button
                  type="submit"
                  className="google-btn w-100"
                  style={{
                    backgroundColor: "rgb(220, 53, 69)",
                    color: "white",
                  }}
                >
                  Continue
                </button>
              </div>
              {/* Divider with OR */}
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2">OR</span>
                <hr className="flex-grow-1" />
              </div>
              <div>
                {loginMethod === "email" ? (
                  <button
                    type="button"
                    onClick={() => setLoginMethod("phone")}
                    className="google-btn w-100"
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      border: "1px solid black",
                      marginBottom: "10px",
                      fontWeight: "normal",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "left",
                      gap: "70px",
                      padding: "10px",
                    }}
                  >
                    <i class="fa-solid fa-phone"></i>
                    Login with Phone Number
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setLoginMethod("email")}
                    className="google-btn w-100"
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      border: "1px solid black",
                      marginBottom: "10px",
                      fontWeight: "normal",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "left",
                      gap: "100px",
                      padding: "10px",
                    }}
                  >
                    <i class="fa-solid fa-envelope"></i>
                    Login with Email
                  </button>
                )}

                {/* Google Sign-In Button */}
                <div
                  className="mb-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bold",
                    borderRadius: "5px",
                  }}
                >
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => setError("Google Login Failed")}
                  />
                </div>
              </div>
            </form>
            {error && (
              <p
                style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}
              >
                {error}
              </p>
            )}
          </div>
          <footer className="fixed-footer">
            <div className="footer">
              <div className="f-info">
                <div className="f-info-socials">
                  <a href="#">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div>&copy; WanderLust Private Limited</div>
                <div className="f-info-links">
                  <a href="/privacy">Privacy</a>
                  <a href="/term">Term</a>
                </div>
              </div>
            </div>
          </footer>
        </NoAuth>
      </MainBoilerplate>
    </GoogleOAuthProvider>
  );
};

export default Login;
