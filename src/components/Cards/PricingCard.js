import React from "react";
import "./PricingCard.css";
import Button from "./../Button/Button";

function PricingCard({ title, packages, description, color, button }) {
  return (
    <div className="pricingcard__container">
      <div className={`pricingcard ${color}`}>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <p>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M12.75 17L15.58 19.83L21.25 14.17"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              s
            </svg>
          </span>
          Report generation, weekly and daily analysis of stock
        </p>
        <p>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M12.75 17L15.58 19.83L21.25 14.17"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Report generation, weekly and daily analysis of stock
        </p>
        <p>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M12.75 17L15.58 19.83L21.25 14.17"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Report generation, weekly and daily analysis of stock
        </p>
        <p>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="white" />
              <path
                d="M12.75 17L15.58 19.83L21.25 14.17"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Report generation, weekly and daily analysis of stock
        </p>
        <Button btnStyle={`"btn__white" ${button}`} text="Sign up" />
      </div>
    </div>
  );
}

export default PricingCard;
