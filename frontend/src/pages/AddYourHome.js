import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const AddYourHome = () => {
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [nights, setNights] = useState(30);
  const [earnings, setEarnings] = useState(33750);
  const [showInputBox, setShowInputBox] = useState(false);
  const mapRef = useRef(null);
  const [openSection, setOpenSection] = useState(null);

  const videoSources = [
    "https://stream.media.muscache.com/zloG6NYW02XHNHOQyQL1a2Nn00HCkEHHfp01vq6O00lPLUA.mp4?v_q=high",
    "https://stream.media.muscache.com/aWJrkS4U1OZPMEAYeaXgDMJG00GSW0046fXLrHi9eShF4.mp4?v_q=high",
    "https://stream.media.muscache.com/NS1z701ZgXNLeqkVNZ02U3cI4h1O4QbsRaNdBDgrsYcTc.mp4?v_q=high",
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const [playing, setPlaying] = useState(
    Array(videoSources.length).fill(false)
  );

  const togglePlayPause = (index) => {
    const video = document.getElementById(`video-${index}`);

    if (video.paused) {
      video.play();
      setPlaying((prev) =>
        prev.map((state, i) => (i === index ? true : state))
      );
    } else {
      video.pause();
      setPlaying((prev) =>
        prev.map((state, i) => (i === index ? false : state))
      );
    }
  };

  // Update earnings based on nights and bedrooms
  useEffect(() => {
    const baseRate = 1125;
    const bedroomMultiplier = 1 + (bedrooms - 1) * 0.3; // 30% more per extra bedroom
    setEarnings(Math.round(nights * baseRate * bedroomMultiplier));
  }, [nights, bedrooms]);

  const fetchCoordinates = async () => {
    if (location) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
        );

        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          const latitude = parseFloat(lat);
          const longitude = parseFloat(lon);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            // Remove existing map if it exists
            if (mapRef.current) {
              mapRef.current.remove();
            }

            // Initialize a new map
            const map = L.map("map").setView([latitude, longitude], 13);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
            }).addTo(map);

            // Add marker to map
            L.marker([latitude, longitude])
              .addTo(map)
              .bindPopup(`${location} - ${bedrooms} Bedroom(s)`)
              .openPopup();

            // Save map instance to ref
            mapRef.current = map;
            setShowInputBox(false);
          } else {
            alert("Location not found on the map.");
          }
        } else {
          alert("No results found for this location.");
        }
      } catch (err) {
        alert("Failed to load map. Please check location or network.");
      }
    }
  };

  const handleUpdateEstimate = () => {
    fetchCoordinates();
  };

  return (
    <div
      className="container mt-0"
      style={{
        backgroundColor: showInputBox ? " #E5E5E5" : "white",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        className="row"
        style={{ width: "70%", margin: "auto", marginTop: "100px" }}
      >
        {/* Left Side: Text, Range, and Location Box */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center"
          style={{ height: "700px" }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Your home could <br /> make
            <span style={{ color: " #FF5A5F" }}>
              ₹{earnings.toLocaleString()}
            </span>{" "}
            <br /> on Airbnb
          </h1>

          {/* Range Slider for Nights */}
          <div className="mb-4" style={{ width: "400px", alignSelf: "center" }}>
            <label
              htmlFor="nightsRange"
              style={{
                alignSelf: "center",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
              }}
              className="text-center"
            >
              {nights} nights . 1125₹/night
            </label>
            <input
              type="range"
              id="nightsRange"
              className="form-range"
              min="1"
              max="30"
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
            />
          </div>

          {/* Box Trigger */}
          <div className="mb-3">
            <button
              className="form-control text-start btn btn-light"
              style={{
                width: "400px",
                alignSelf: "center",
                height: "60px",
                border: "1px solid #a1a1a1",
                borderRadius: " 50px 50px 50px 50px",
                marginLeft: "120px",
              }}
              onClick={() => setShowInputBox(true)}
            >
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: " #FF5A5F" }}
              ></i>{" "}
              Enter Address or Area
            </button>
          </div>

          {/* Conditional Input Box */}
          {showInputBox && (
            <div
              className="p-4 shadow"
              style={{
                position: "fixed",
                top: "300px",
                left: "350px",
                alignItems: "center",
                backgroundColor: "#fff",
                width: "600px",
                height: "500px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "20px",
              }}
            >
              <h5 className="mb-3">Enter Your Property Details</h5>

              {/* Location Input */}
              <div className="mb-3">
                <label className="form-label">Address or Area</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              {/* Bedroom Selector */}
              <div className="mb-3">
                <label className="form-label">Number of Bedrooms</label>
                <select
                  className="form-select"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Bedroom{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Update Button */}
              <button
                className="btn btn-primary"
                onClick={handleUpdateEstimate}
              >
                Update Your Estimate
              </button>

              <button
                className="btn btn-secondary ms-2"
                onClick={() => setShowInputBox(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Map */}
        <div className="col-md-6">
          <div id="map" style={{ height: "700px", borderRadius: "10px" }}></div>
        </div>
      </div>

      <div style={{ width: "40%", marginTop: "80px" }}>
        <p
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          It’s easy to list your <br /> home on Airbnb
        </p>
        <img
          src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297260081/original/e97a2325-f789-49df-b474-25c77476d433.jpeg?im_w=1680&im_format=avif&im_origin=fuzzy"
          alt="List your home on Airbnb"
          style={{ width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "60px",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{
                display: "block",
                height: "25px",
                width: "25px",
                fill: "currentColor",
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m17.98 1.9.14.14 13.25 13.25-1.41 1.42-.96-.96v12.58a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15.75l-.96.96-1.41-1.42L13.88 2.04a3 3 0 0 1 4.1-.13zm-2.6 1.47-.09.08L5 13.75 5 28.33h6v-10a2 2 0 0 1 1.85-2H19a2 2 0 0 1 2 1.85v10.15h6V13.75L16.7 3.45a1 1 0 0 0-1.31-.08zM19 18.33h-6v10h6z"></path>
            </svg>
            <p style={{ margin: "5px 0 0 0", textAlign: "center" }}>
              Create a listing for your place in just a few steps
            </p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{
                display: "block",
                height: "25px",
                width: "25px",
                fill: "currentColor",
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M19 1v2h-2v2.04a13 13 0 0 1 12 12.65V18a13 13 0 1 1-26 0 12.96 12.96 0 0 1 4.1-9.48L5.3 6.71l1.4-1.42 1.97 1.97A12.93 12.93 0 0 1 15 5.04V3h-2V1h6zm-3 6a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm-4.3 3.3 6 6-1.4 1.4-6-6 1.4-1.4zM16 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>

            <p style={{ margin: "5px 0 0 0", textAlign: "center" }}>
              Go at your own pace, and make changes whenever
            </p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{
                display: "block",
                height: "25px",
                width: "25px",
                fill: "currentColor",
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M26 1a5 5 0 0 1 5 4.78v10.9a5 5 0 0 1-4.78 5H26a5 5 0 0 1-4.78 5h-4l-3.72 4.36-3.72-4.36H6a5 5 0 0 1-4.98-4.56L1 21.9 1 21.68V11a5 5 0 0 1 4.78-5H6a5 5 0 0 1 4.78-5H26zm-5 7H6a3 3 0 0 0-3 2.82v10.86a3 3 0 0 0 2.82 3h4.88l2.8 3.28 2.8-3.28H21a3 3 0 0 0 3-2.82V11a3 3 0 0 0-3-3zm-1 10v2H6v-2h14zm6-15H11a3 3 0 0 0-3 2.82V6h13a5 5 0 0 1 5 4.78v8.9a3 3 0 0 0 3-2.82V6a3 3 0 0 0-2.82-3H26zM15 13v2H6v-2h9z"></path>
            </svg>
            <p style={{ margin: "5px 0 0 0", textAlign: "center" }}>
              Get 1:1 support from experienced hosts at any time
            </p>
          </span>
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727218100752/original/32ac40bb-cf46-4994-9083-f6f0810d401e.png?im_w=240&im_format=avif&im_origin=fuzzy"
            alt="List your home on Airbnb"
            style={{
              marginTop: "80px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p
            style={{
              fontSize: "50px",
              marginBottom: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            However you host, <br /> you’re protected
          </p>
          <p style={{ color: "gray", textAlign: "center", fontSize: "25px" }}>
            Top-to-bottom protection, included every time <br /> you host your
            home on Airbnb.
          </p>
        </div>

        <div>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            Up to $3m USD damage protection{" "}
            <i
              class="fa-solid fa-check"
              style={{ color: "green", textAlign: "right", display: "flex" }}
            ></i>
          </span>
          <hr />
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            Up to $1m USD liability insurance{" "}
            <i
              class="fa-solid fa-check"
              style={{ color: "green", textAlign: "right", display: "flex" }}
            ></i>
          </span>
          <hr />
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            24-hour safety line{" "}
            <i
              class="fa-solid fa-check"
              style={{ color: "green", textAlign: "right", display: "flex" }}
            ></i>
          </span>
        </div>

        <button
          style={{
            color: "white",
            backgroundColor: "black",
            marginTop: "50px",
            display: "block",
            borderRadius: "50px",
            height: "50px",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Learn about AirCover
        </button>

        <p style={{ marginTop: "60px", textAlign: "center", color: "gray" }}>
          Host Damage Protection reimburses for certain guest damages during
          Airbnb stays. It’s not insurance and may apply if guests don’t pay.
          Liability insurance is provided by 3rd parties. Check details and
          exclusions.
        </p>
        <p
          style={{
            fontSize: "50px",
            marginBottom: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          All the tools you need <br /> to host, all in one app
        </p>
      </div>
      <div style={{ width: "100%", marginTop: "80px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {videoSources.map((src, index) => (
            <div
              key={index}
              style={{ position: "relative", width: "330px", height: "400px" }}
            >
              <video
                id={`video-${index}`}
                width="400"
                height="400"
                playsInline
                preload="metadata"
                style={{ borderRadius: "10px", boxShadow: "none" }}
                controlsList="nodownload nofullscreen noremoteplayback"
                onPlay={() =>
                  setPlaying((prev) =>
                    prev.map((state, i) => (i === index ? true : state))
                  )
                }
                onPause={() =>
                  setPlaying((prev) =>
                    prev.map((state, i) => (i === index ? false : state))
                  )
                }
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Button */}
              <button
                onClick={() => togglePlayPause(index)}
                style={{
                  position: "absolute",
                  left: "43px",
                  top: "380px",
                  transform: "translateY(-50%)",
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  border: "none",
                  // padding: "10px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "14px",
                  display: "flex", // Ensures icon is centered
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {playing[index] ? (
                  <i class="fa-solid fa-pause" style={{ color: "white" }}></i>
                ) : (
                  <i class="fa-solid fa-play" style={{ color: "white" }}></i>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "60%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
            marginTop: "20px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "120px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                alignItems: "left",
                marginBottom: "0px",
              }}
            >
              Listing editor
            </p>
            <p style={{ textAlign: "center", alignItems: "left" }}>
              Showcase every detail of your home
            </p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "0px" }}>Calendar</p>
            <p style={{ textAlign: "center" }}>
              Manage your availability and pricing
            </p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginRight: "50px",
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: "0px" }}>Messages</p>
            <p style={{ textAlign: "center" }}>
              Quickly message guests and support
            </p>
          </span>
        </div>
      </div>

      <div
        className="container mt-0"
        style={{
          backgroundColor: "#f7f7f7ff",
          minWidth: "100vw",
          // position: "relative",
          marginLeft: "0px",
          paddingLeft: "0px",
        }}
      >
        <div style={{ width: "40%", marginTop: "80px" }}>
          <p
            style={{
              fontSize: "50px",
              marginBottom: "20px",
              fontWeight: "bold",
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              position: "flex",
            }}
          >
            Your questions,
            <br />
            answered
          </p>
          <div>
            {/* Top Questions */}
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "normal",
                }}
                onClick={() => toggleSection("topQuestions")}
              >
                Top Questions{" "}
                <i
                  className={`fa-solid ${
                    openSection === "topQuestions"
                      ? "fa-angle-up"
                      : "fa-angle-down"
                  }`}
                ></i>
              </span>
              {openSection === "topQuestions" && (
                <div>
                  <strong>Is my place right for Airbnb?</strong>
                  <br />
                  Airbnb guests are interested in all kinds of places – spare
                  rooms, flats, houses, holiday homes, even treehouses.
                  <br />
                  <br />
                  <strong>Do I have to host all the time?</strong>
                  <br />
                  No – you control your calendar. You can host once a year, a
                  few nights a month or more often.
                  <br />
                  <br />
                  <strong>What are Airbnb’s fees?</strong>
                  <br />
                  It’s free to create a listing, and Airbnb typically collects a
                  service fee of 3% of the reservation subtotal once you get
                  paid. In many areas, Airbnb automatically collects and pays
                  sales and tourism taxes on your behalf.{" "}
                  <u>Learn more about fees.</u>
                </div>
              )}
              <hr />
            </div>

            {/* Hosting Basics */}
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "normal",
                }}
                onClick={() => toggleSection("hostingBasics")}
              >
                Hosting Basics{" "}
                <i
                  className={`fa-solid ${
                    openSection === "hostingBasics"
                      ? "fa-angle-up"
                      : "fa-angle-down"
                  }`}
                ></i>
              </span>
              {openSection === "hostingBasics" && (
                <div>
                  <strong>How do I get started?</strong>
                  <br />
                  You can create a listing in just a few steps, all at your own
                  pace. Start by telling us about your home, take some photos
                  and add details about what makes it unique.
                  <u>Start your listing</u>.
                  <br />
                  <br />
                  <strong>How do I get my home ready for guests?</strong>
                  <br />
                  Make sure your home is clean, clutter-free, and that
                  everything is working properly. Items like fresh linen and
                  stocked toiletries help create a comfortable and inviting
                  place to stay.{" "}
                  <u>Check out our guide to getting your home ready</u>.
                  <br />
                  <br />
                  <strong>How am I protected when I host?</strong>
                  <br />
                  AirCover for Hosts provides top-to-bottom protection every
                  time you host your home on Airbnb.{" "}
                  <u>
                    Learn more about AirCover for Hosts and what’s included.
                  </u>
                  .
                  <br />
                  <br />
                  <strong>Any tips on being a great host?</strong>
                  <br />
                  From sharing a list of your favourite local places to
                  responding quickly to guest messages, there are lots of ways
                  to be an excellent host. <u>Get more hosting tips</u>.
                </div>
              )}
              <hr />
            </div>

            {/* Policy & Regulations */}
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "normal",
                }}
                onClick={() => toggleSection("policyRegulations")}
              >
                Policy & Regulations{" "}
                <i
                  className={`fa-solid ${
                    openSection === "policyRegulations"
                      ? "fa-angle-up"
                      : "fa-angle-down"
                  }`}
                ></i>
              </span>
              {openSection === "policyRegulations" && (
                <div>
                  <strong>
                    Are there any regulations that apply in my city?
                  </strong>
                  <br />
                  Some areas have laws and regulations for hosting your home.
                  It’s important to familiarise yourself with any laws that may
                  apply to your location. Also, depending on where you live, you
                  may need to check with your HOA, read your lease agreement or
                  notify your landlord or neighbours about your plans to host on
                  Airbnb. <u>Learn more about responsible hosting</u>.
                  <br />
                  <br />
                  <strong>What if I have other questions?</strong>
                  <br />
                  Local hosts are a great source for information and insights.
                  We can connect you with an experienced Airbnb host in your
                  area who may be able to answer additional questions.{" "}
                  <u>Ask a host</u>.
                </div>
              )}
              <hr />
            </div>
          </div>
          <p
            style={{
              fontSize: "30px",
              marginBottom: "0px",
              fontWeight: "bold",
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              position: "flex",
              marginTop: "80px",
            }}
          >
            Still have questions?
          </p>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "20px",
              color: "gray",
              fontWeight: "bold",
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              position: "flex",
              // marginTop: "50px"
            }}
          >
            Get answers from an experienced local host.
          </p>
        </div>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            marginTop: "30px",
            display: "block",
            borderRadius: "50px",
            height: "50px",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "50px",
          }}
        >
          Ask a host
        </button>
        <hr style={{ width: "100%", margin: "auto", marginBottom: "20px" }} />
        <div style={{ width: "70%" }}>
          <p style={{ alignItems: "center", color: "gray" }}>
            Hosts on the Co‑Host Network typically have high ratings, low
            cancellation rates and established Airbnb hosting experience.
            Ratings are based on guest reviews for listings they host or co‑host
            and may not represent the co‑host’s unique services.
          </p>
          <p style={{ alignItems: "center", color: "gray" }}>
            Co‑Host Network is powered by Airbnb Global Services Limited, Airbnb
            Living LLC and Airbnb Plataforma Digital Ltda. Available in select
            locations only.
            <br />
            <u>Learn more.</u>
          </p>
        </div>
        <hr style={{ width: "100%", margin: "auto", marginBottom: "20px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "100px",
            marginTop: "60px",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // textAlign: "left",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Support</p>
            <p style={{ margin: "5px 0 0 0" }}>Help Centre</p>
            <p style={{ margin: "5px 0 0 0" }}>AirCover</p>
            <p style={{ margin: "5px 0 0 0" }}>Anti-discrimination</p>
            <p style={{ margin: "5px 0 0 0" }}>Disability support</p>
            <p style={{ margin: "5px 0 0 0" }}>Cancellation options</p>
            <p style={{ margin: "5px 0 0 0" }}>Report neighbourhood concern</p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Hosting</p>
            <p style={{ margin: "5px 0 0 0" }}>Airbnb your home</p>
            <p style={{ margin: "5px 0 0 0" }}>AirCover for Hosts</p>
            <p style={{ margin: "5px 0 0 0" }}>Hosting resources</p>
            <p style={{ margin: "5px 0 0 0" }}>Community forum</p>
            <p style={{ margin: "5px 0 0 0" }}>Hosting responsibly</p>
            <p style={{ margin: "5px 0 0 0" }}>Join a free Hosting class</p>
            <p style={{ margin: "5px 0 0 0" }}>Find a co‑host</p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Airbnb</p>
            <p style={{ margin: "5px 0 0 0" }}>Newsroom</p>
            <p style={{ margin: "5px 0 0 0" }}>New features</p>
            <p style={{ margin: "5px 0 0 0" }}>Careers</p>
            <p style={{ margin: "5px 0 0 0" }}>Investors</p>
            <p style={{ margin: "5px 0 0 0" }}>Airbnb.org emergency stays</p>
          </span>
        </div>
        <hr style={{ width: "70%", margin: "auto", marginBottom: "20px" }} />
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {/* Left Side Content */}
          <span>
            © 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
          </span>

          {/* Right Side Icons */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              style={{
                height: "16px",
                width: "16px",
                fill: "currentColor",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              English (IN)
            </span>
            <span style={{ marginLeft: "30px", fontWeight: "bold" }}>
              ₹ INR
            </span>
            <i
              class="fa-brands fa-square-instagram"
              style={{ marginLeft: "30px", fontSize: "24px" }}
            ></i>
            <i
              class="fa-brands fa-square-twitter"
              style={{ marginLeft: "10px", fontSize: "24px" }}
            ></i>
            <i
              class="fa-brands fa-square-facebook"
              style={{ marginLeft: "10px", fontSize: "24px" }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddYourHome;
