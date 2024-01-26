import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section className="about_section">
        <div className="about_heading">
          <span className="about_heading_text1">About Us</span>

          <h1 className="about_heading_text2">
            Know More About our
            <br />
            <span className="about_heading_text2_blue">Shop</span>
          </h1>
          <p className="about_heading_text3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab
            accusamus sed fugiat!
          </p>
        </div>
      </section>
      <section className="about_section_part2">
        <div className="about_sub_section_part2">
          <div className="about_section_part2_heading">
            <h1 className="about_section_part2_heading_text">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="about_section_part2_subHeading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              error provident ullam corporis.
            </p>

            <ul className="about_bullet_points">
              <li>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
              <li>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
              <li>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
            </ul>
          </div>

          <div className="about_section_right_part">
            <img
              className="shop_image"
              src="/background_image.jpg"
              alt="shop image"
            />
          </div>
        </div>
      </section>

      <section className="about_section_part3">
        <div className="about_section_part3_left">
          <img
            className="shop_image2"
            src="/background_image.jpg"
            alt="shop image"
          />
        </div>

        <div className="about_section_part3_right">
          <h1 className="about_section_part3_heading">
            Lorem ipsum dolor
          </h1>
          <p className="about_section_part3_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim rerum accusamus veniam. Illo, laboriosam!</p>
        </div>
      </section>
    </>
  );
}

export default About;
