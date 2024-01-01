import React from "react";
import "./Home.css";
function Home() {
  return (
    <section className="template_home">
      <div className="home_first_div">
        <div className="home_second_div">
          <h1 className="home_heading">
            The Best Dry Cleaning Shop In
            <span className="home_blue_heading"> Shastri Nagar</span>
          </h1>
          <p className="subHeading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            illum dolorum illo voluptatum rerum obcaecati asperiores dolor vero
            aperiam cum veritatis mollitia aliquid, optio, ipsam expedita
            corrupti excepturi molestiae sed?
          </p>

          <div className = "button_container">

                <button className="contact_button">
                    Contact Us
                </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
