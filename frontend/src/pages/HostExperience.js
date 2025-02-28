import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HostExperience = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // Track play/pause state
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      // Ensure video reference exists
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Update button state
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflowY: "auto", // Make the page scrollable
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "600px",
          marginTop: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginLeft: "25%",
            marginRight: "25%",
          }}
        >
          <p
            style={{
              marginTop: "150px",
              fontSize: "15px",
              fontWeight: "bold",
              color: "black",
              width: "70%",
            }}
          >
            HOST AN EXPERIENCE ON WANDERLUST
          </p>
          <p
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Earn money leading people on activities you love.
          </p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              border: "none",
              borderRadius: "10px",
              width: "100px",
              height: "50px",
            }}
          >
            Let's Go
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "300px",
          background: "linear-gradient(to bottom, transparent, black)", // Gradient from transparent to black horizontally
          height: "600px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginLeft: "25%",
            marginRight: "25%",
          }}
        >
          <p style={{ color: "white", fontSize: "30px", marginTop: "450px" }}>
            What's an experience?
          </p>
          <p style={{ color: "white", fontSize: "15px", width: "70%" }}>
            It’s an activity that goes beyond the typical tour or class,
            designed and led by locals all over the world. Show off your city,
            craft, cause, or culture by hosting an experience.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "black",
            height: "auto",
            display: "flex",
            flexDirection: "column", // Ensures sections appear in a vertical stack
            alignItems: "center",
            padding: "50px 0", // Add some spacing
          }}
        >
          {/* Main container for image & content - takes 60% width */}
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center", // Aligns image & text vertically
            }}
          >
            {/* Left side - Image */}
            <div style={{ width: "40%" }}>
              <img
                src="https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg?aki_policy=x_large"
                style={{
                  width: "100%", // Full width of its container
                  height: "100%", // Full height of its container
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right side - Content */}
            <div
              style={{
                width: "50%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Create an activity, your way
              </h2>
              <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                Food tour by bike, light photography at night, tapas on a boat,
                or yoga (with goats). Create and curate a unique activity people
                want to try.
              </p>
            </div>
          </div>
          {/* Second Section (Content Left, Image Right) */}
          <div
            style={{
              marginTop: "80px",
              width: "50%",
              display: "flex",
              alignItems: "center",
              //   flexDirection: "row-reverse", // Flip positions (content left, image right)
            }}
          >
            {/* Left side - Content */}
            <div
              style={{
                width: "50%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Do what you love (and get paid)
              </h2>
              <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                Scout for street art or surf at sunset, turn your passion into
                profit. Earn money without it feeling like a job.
              </p>
            </div>

            {/* Rigth side - Image */}
            <div style={{ width: "40%" }}>
              <img
                src="https://a0.muscache.com/im/pictures/55b065f5-e6d9-4a0a-8066-9c1850db7660.jpg?aki_policy=x_large"
                style={{
                  width: "100%", // Full width of its container
                  height: "100%", // Full height of its container
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          {/* third Section (Image Left, Content Right) */}
          <div
            style={{
              marginTop: "80px",
              width: "50%",
              display: "flex",
              alignItems: "center",
              //   flexDirection: "row-reverse", // Flip positions (content left, image right)
            }}
          >
            {/* left side - Image */}
            <div style={{ width: "40%" }}>
              <img
                src="https://a0.muscache.com/im/pictures/d1d720a0-7253-4f89-b9b4-50759c376a9a.jpg?aki_policy=x_large"
                style={{
                  width: "100%", // Full width of its container
                  height: "100%", // Full height of its container
                  objectFit: "cover",
                }}
              />
            </div>

            {/* right side - Content */}
            <div
              style={{
                width: "50%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Get voices for your cause
              </h2>
              <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                Lead a hike with rescue dogs, or teach ethical fashion. Raise
                awareness of your cause in a whole new way.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#F7F7F7",
            height: "250px",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center", // Aligns image & text vertically
              marginTop: "80px",
            }}
          >
            {/* Left side - Image */}
            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
                Show what you know
              </h2>
            </div>

            {/* Right side - Content */}
            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                There are experiences of every kind, like cooking, crafting,
                kayaking and more. There’s no limit to what you can do. Explore
                these featured categories.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#DDDDDD",
            height: "500px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Container for Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px", // Spacing between cards
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                width: "300px",
                backgroundColor: "white",
                // borderRadius: "10px",
                // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg?aki_policy=x_large"
                alt="Food & Drink"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Culture & History
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  Share the story behind famous landmarks in your city.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                width: "300px",
                backgroundColor: "white",
                // borderRadius: "10px",
                // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://a0.muscache.com/im/pictures/eca85a07-8fad-4648-a4a4-b4c9283fdd65.jpg?aki_policy=x_large"
                alt="Arts & Culture"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Food & Drink
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  Host a food tour, cooking class, dining experience, and more.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                width: "300px",
                backgroundColor: "white",
                // borderRadius: "10px",
                // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://a0.muscache.com/im/pictures/1ecf2c03-5b86-4af3-a194-c18764eafbb3.jpg?aki_policy=x_large"
                alt="Outdoor Activities"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Nature & Outdoor
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  Lead nature hikes, water sports, mountain activities, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#F7F7F7",
            height: "auto",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center", // Aligns image & text vertically
              marginTop: "80px",
            }}
          >
            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
                We’ve got your back,
                <br />
                every step of the way
              </h2>
            </div>

            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
                Resources like articles and insights dedicated to your hosting
                needs, 24/7 customer support for you and your guests, exposure
                for your experience and much more, to help you grow your
                business.
              </p>
            </div>
          </div>

          <div
            style={{
              width: "60%",
              height: "300px",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Aligns image & text vertically
                marginTop: "80px",
              }}
            >
              {/* Left side - Text Content */}
              <div
                style={{
                  width: "50%",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "20px", // Adds spacing between image and text
                }}
              >
                <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
                  Tools tailored to you
                </h2>
                <p>
                  A dashboard to give you insights, feedback on how to improve,
                  visibility to guests from all over the world through search
                  and filters, seamless payments, and much more.
                </p>
              </div>

              {/* Right side - Images Container */}
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexWrap: "wrap", // Allows images to wrap
                  justifyContent: "center", // Centers images
                  gap: "10px", // Adds spacing between images
                  paddingLeft: "20px",
                }}
              >
                {/* Image 1 */}
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-alarm.e0a2b02fa7d1e956cd4135847fc0cda1.gif"
                  alt="Image 1"
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "2px solid #FF5A5F",
                    boxShadow: "0px 4px 20px rgba(255,90,95,0.2)",
                  }}
                />
                {/* Image 2 */}
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-calendar.ace59291b2904181320cb34108a24537.gif"
                  alt="Image 2"
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "2px solid rgba(36, 167, 243, 0.9)",
                    boxShadow: "0px 4px 20px rgba(9, 5, 243, 0.2)",
                  }}
                />
                {/* Image 3 */}
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-money-saved.0d988c4ec128a1a11fdc5c499940dec8.gif"
                  alt="Image 3"
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "2px solid hsla(41, 83.90%, 41.40%, 0.90)",
                    boxShadow: "0px 4px 20px #e1ec7a",
                  }}
                />
                {/* Image 4 */}
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/explore-core/images/icon-uc-graph.3f8bd411622845e624b9be5ba9631168.gif"
                  alt="Image 4"
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "2px solid rgba(36, 167, 243, 0.9)",
                    boxShadow: "0px 4px 20px rgba(9, 5, 243, 0.2)",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              width: "60%",
              height: "300px",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center", // Aligns image & text vertically
                marginTop: "80px",
              }}
            >
              {/* Left side - Text Content */}
              <div
                style={{
                  width: "50%",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "20px", // Adds spacing between image and text
                }}
              >
                <img
                  src="https://a0.muscache.com/im/pictures/28fc92ed-0595-42b6-b332-7ee6fdf55a3e.jpg?im_w=720&im_format=avif"
                  alt="Image 1"
                  style={{
                    width: "80%",
                    height: "80%",
                  }}
                />
              </div>

              {/* Right side - Text Content */}
              <div
                style={{
                  width: "50%",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "20px", // Adds spacing between image and text
                }}
              >
                <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
                  AirCover for Hosts covers Experiences too
                </h2>
                <p>
                  AirCover for Hosts includes $1M in Experiences liability
                  insurance in the rare event a guest gets hurt during an Airbnb
                  Experience. Always included and always free.
                </p>

                <p style={{ fontWeight: "bold", gap: "8px" }}>
                  <u>Learn more</u>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center", // Aligns image & text vertically
              marginTop: "80px",
            }}
          >
            {/* Left side - Text Content */}
            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "40px",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <h2
                style={{
                  fontColor: "#222222",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                How to get started
              </h2>
            </div>

            {/* Right side - Text Content */}
            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px", // Adds spacing between image and text
              }}
            >
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                Here’s a quick overview of the process, from start to finish.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F7F7F7",
              height: "300px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Container for Cards */}
            <div
              style={{
                display: "flex",
                gap: "20px", // Spacing between cards
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  width: "350px",
                  backgroundColor: "#DDDDDD",
                  // borderRadius: "10px",
                  // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  paddingBottom: "30px",
                }}
              >
                <div style={{ padding: "15px" }}>
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      marginTop: "20px",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        background: "transparent",
                        border: "2px solid black",
                        color: "black",
                        padding: "px 10px",
                        borderRadius: "50%",
                      }}
                    >
                      1
                    </h1>
                  </div>

                  <h3
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Learn our quality standards
                  </h3>
                  <p style={{ fontSize: "15px", marginTop: "25px" }}>
                    Make sure your experience meets our bar for expertise,
                    insider access and connection.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  width: "350px",
                  backgroundColor: "#DDDDDD",
                  // borderRadius: "10px",
                  // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  paddingBottom: "30px",
                }}
              >
                <div style={{ padding: "15px" }}>
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      marginTop: "20px",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        background: "transparent",
                        border: "2px solid black",
                        color: "black",
                        padding: "px 10px",
                        borderRadius: "50%",
                      }}
                    >
                      2
                    </h1>
                  </div>

                  <h3
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Submit your experience
                  </h3>
                  <p style={{ fontSize: "15px", marginTop: "25px" }}>
                    Share a description and high-quality photos of what you have
                    in mind to show what your experience would be like.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  width: "350px",
                  backgroundColor: "#DDDDDD",
                  // borderRadius: "10px",
                  // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  paddingBottom: "30px",
                }}
              >
                <div style={{ padding: "15px" }}>
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      marginTop: "20px",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        background: "transparent",
                        border: "2px solid black",
                        color: "black",
                        padding: "px 10px",
                        borderRadius: "50%",
                      }}
                    >
                      3
                    </h1>
                  </div>

                  <h3
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Start hosting
                  </h3>
                  <p style={{ fontSize: "15px", marginTop: "25px" }}>
                    Your experience will be reviewed and if it is approved, you
                    can add dates to your calendar and start welcoming guests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            style={{
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              marginBottom: "100px",
              marginTop: "100px",
              fontSize: "16px",
              border: "none",
              borderRadius: "10px",
              width: "100px",
              height: "50px",
            }}
          >
            Let's Go
          </button>

          <div
            style={{ backgroundColor: "white", width: "100%", padding: "20px" }}
          >
            <div
              style={{
                width: "60%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  marginTop: "70px",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Frequently asked questions
              </p>

              <p
                style={{
                  marginTop: "40px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Do I have to host a home to host an experience?
              </p>
              <p style={{ fontSize: "18px" }}>
                No. You don’t have to host guests overnight in your home or
                space to be an experience host.
              </p>
              <hr />

              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Can I set a minimum number of guests per experience?
              </p>
              <p style={{ fontSize: "18px" }}>
                The minimum number of guests you can host during each instance
                of your experience is 1.
              </p>
              <hr />

              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                Do I need insurance?
              </p>
              <p style={{ fontSize: "18px" }}>
                With AirCover for Hosts, you get Experiences liability
                insurance. That coverage applies to you in the rare event a
                guest is hurt or their property is damaged during a covered
                Experience. <u style={{ fontWeight: "bold" }}>Learn more</u>
              </p>
              <hr />

              {/* Conditional Rendering for Extra Content */}
              {isExpanded && (
                <>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    What’s the time commitment?
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    You can host as often as you like – feel free to adjust your
                    dates and times until you find what works best for you.
                  </p>
                  <hr />

                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Do I need a business licence?
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Depending on activities involved, certain experiences may
                    require a business licence. Make sure to check local laws in
                    your area to determine which licences may be required for
                    your experience, especially if there is food, alcohol, or
                    transport involved.{" "}
                    <u style={{ fontWeight: "bold" }}>Learn more</u>
                  </p>
                  <hr />
                </>
              )}

              {/* Toggle Button */}
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#008489",
                  cursor: "pointer",
                  fontSize: "16px",
                  border: "none",
                  textAlign: "left",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : "Show More"}{" "}
                <i
                  className={`fa-solid fa-angle-${isExpanded ? "up" : "down"}`}
                ></i>
              </button>
            </div>
          </div>

          <hr style={{ width: "100%", margin: "auto", marginBottom: "20px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "100px",
              marginTop: "50px",
              marginBottom: "50px",
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
              <p style={{ margin: "5px 0 0 0" }}>
                Report neighbourhood concern
              </p>
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
              <p style={{ margin: "5px 0 0 0" }}>WanderLust your home</p>
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
              <p style={{ fontWeight: "bold" }}>WanderLust</p>
              <p style={{ margin: "5px 0 0 0" }}>Newsroom</p>
              <p style={{ margin: "5px 0 0 0" }}>New features</p>
              <p style={{ margin: "5px 0 0 0" }}>Careers</p>
              <p style={{ margin: "5px 0 0 0" }}>Investors</p>
              <p style={{ margin: "5px 0 0 0" }}>WanderLust.org emergency stays</p>
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
              © 2025 WanderLust, Inc. · Privacy · Terms · Sitemap · Company details
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

      {/* Background Video */}
      <video
        ref={videoRef} // Assign the reference to the video element
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src="https://stream.media.muscache.com/GLBXMO7wXoGpGzwi6QBynOiqpPONrVB2RQ5KCFSuIxM.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: "2",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      ></div>

      {/* Pause/Play Button */}
      <button
        onClick={toggleVideo}
        style={{
          position: "absolute", // Sticks to the bottom-right
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: isPlaying ? "#ff4d4d" : "#28a745", // Red when playing, green when paused
          color: "white",
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          opacity: "0.8",
          transition: "background 0.3s ease",
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default HostExperience;
