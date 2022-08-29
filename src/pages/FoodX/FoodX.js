import React from "react";
import Button from "../../components/Button/Button";
import "./FoodX.css";
import { features } from "./../../data/features";
import { pricing } from "./../../data/pricing";
import FeatureCard from "./../../components/Cards/FeatureCard";
import PricingCard from "../../components/Cards/PricingCard";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";

function FoodX() {
  return (
    <>
      <div className="foodX__banner_container">
        <div className="FoodX__banner_circle1"></div>
        <div className="FoodX__banner_circle2"></div>
        <div className="foodX__banner_text">
          <div className="foodX__banner_logo">
            <h3 className="foodX_logo">FoodX</h3>
          </div>
          <div className="foodX__banner_H3">
            <h2>Order food directly from the comfort of your home</h2>
          </div>
          <div className="foodX__banner_P">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vel tempus varius mi in purus maximus vulputate. Cras sit amet
              dignissim enim. amet consectetur adipiscing elit. Aliquam vel
              neque nec ex efficitur tempus.
            </p>
          </div>
          <Button text="Get Started" btnStyle="btn__white" />
        </div>

        <div className="FoodX__banner_image">
          <div className="foodX__banner_phone">
            <img src={"./hero section image.png"} alt="phone" />
          </div>
        </div>
      </div>

      <div>
        <div className="brands__logo">
          <img src={"./microsoft-logo-png-2396 1.png"} alt="microsoft logo" />
          <img src={"./lampnet_group_logo.png"} alt="lampnet logo" />
        </div>

        <div className="order__section">
          <div className="order__section_img">
            <div className="order__section_phone">
              <img src={"./feature image 1.png"} alt="phone" />
            </div>
            <div className="order__section_fruits">
              <img src={"./Fruits.png"} alt="fruits" />
            </div>
            <div className="order__section_burger">
              <img src={"./burger meal.png"} alt="burger" />
            </div>
          </div>
          <div className="order__section_content">
            <p>PRODUCT VARIETY</p>
            <h3>Pick from a variety of options on sale</h3>
            <p className="order__section_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel
              neque nec ex tempus varius mi in purus Cras sit amet di issim
              enim. Loremipsumsit amet consectetur adipiscing elit. Aliquam vel
              neque nec varius mi in purus maximus vulputate. Cras sit
              ameconsectetur adipiscing elit. Aliquam vel neque nec.
            </p>
            <Button text="Get started" btnStyle="btn__primary" />
          </div>
        </div>

        <div className="features__container">
          <div className="features__heading">
            <h3>OTHER FEATURES</h3>
            <p>More exciting features of the app</p>
          </div>

          <div className="features">
            {features.map((cur, i) => {
              return (
                <FeatureCard
                  key={i}
                  img={cur.img}
                  title={cur.title}
                  description={cur.description}
                />
              );
            })}
          </div>

          <div className="getstarted__cta">
            <h3>OTHER FEATURES</h3>
            <p>More exciting features of the app</p>
          </div>

          <div className="getstarted__cta_container">
            <div className="getstarted__cta_circle1"></div>
            <div className="getstarted__cta_circle2"></div>
            <img src={"./cta-arrow 1.svg"} alt="" className="cta__arrow1" />
            <img src={"./cta-arrow 2.svg"} alt="" className="cta__arrow2" />
            <img src={"./cta-arrow 3.svg"} alt="" className="cta__arrow3" />

            <div className="cta__tiles_container">
              <div className="cta__tiles">
                <div className="cta__tiles_no">
                  <h2>01</h2>
                </div>
                <div className="cta__tiles_text">
                  <h4>Contact Sales</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur Eligendi non quis
                    exercitationem culpa aut nostrum explicabo reprehenderit
                    temporibus asperiores quasi cupiditate.
                  </p>
                </div>
              </div>
              <div className="cta__tiles">
                <div className="cta__tiles_no">
                  <h2>02</h2>
                </div>
                <div className="cta__tiles_text">
                  <h4>Chose a plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur Eligendi non quis
                    exercitationem culpa aut nostrum explicabo reprehenderit
                    temporibus asperiores quasi cupiditate.
                  </p>
                </div>
              </div>
              <div className="cta__tiles">
                <div className="cta__tiles_no">
                  <h2>03</h2>
                </div>
                <div className="cta__tiles_text">
                  <h4>Personalisation</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur Eligendi non quis
                    exercitationem culpa aut nostrum explicabo reprehenderit
                    temporibus asperiores quasi cupiditate.
                  </p>
                </div>
              </div>
              <div className="cta__tiles">
                <div className="cta__tiles_no">
                  <h2>04</h2>
                </div>
                <div className="cta__tiles_text">
                  <h4>You are all set</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur Eligendi non quis
                    exercitationem culpa aut nostrum explicabo reprehenderit
                    temporibus asperiores quasi cupiditate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="app__info__container">
            <div className="app__info_text">
              <h3>IN-APP MONITORING</h3>
              <p className="app__info_heading">
                Monitor deliveries and orders all from one place
              </p>
              <p className="app__info_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel
                neque nec ex tempus varius mi in purus Cras sit amet di issim
                enim. Loremipsumsit amet consectetur adipiscing elit. Aliquam
                vel neque nec varius mi in purus maximus vulputate. Cras sit
                ameconsectetur adipiscing elit. Aliquam vel neque nec.
              </p>
              <Button text="Contact sales" btnStyle="btn__primary" />
            </div>
            <div className="app__info_img">
              <div className="app__info_circle"></div>
              <img src={"./iphone.svg"} alt="" className="app__info_phone" />
            </div>
          </div>

          <div className="pricing">
            <div className="pricing__heading">
              <h3>Our Pricing</h3>
            </div>
            <div className="pricing__container">
              {/* //TODO: Pricing Cards should be brought inside here */}

              {pricing.map((cur, i) => {
                return (
                  <PricingCard
                    key={i}
                    title={cur.title}
                    packages=""
                    description={cur.description}
                    color={cur.color}
                    button={cur.button}
                  />
                );
              })}
            </div>
          </div>

          <div className="faq__container">
            <div className="faq__container_header">
              <p>GET ANSWERS TO YOUR QUESTIONS</p>
              <h4>Frequently Asked Questions</h4>
            </div>
            <Accordion />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default FoodX;
