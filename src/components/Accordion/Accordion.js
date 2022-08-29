import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";

function FaqAccordion() {
  return (
    <div className="accordion__container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do i get started ?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
            nec ex tempus varius mi in purus Cras sit amet dissim enim.
            Loremipsumsit amet consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Do we get a free trial ?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
            nec ex tempus varius mi in purus Cras sit amet dissim enim.
            Loremipsumsit amet consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Can i cutomize the app ?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
            nec ex tempus varius mi in purus Cras sit amet dissim enim.
            Loremipsumsit amet consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What are the prices ?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
            nec ex tempus varius mi in purus Cras sit amet dissim enim.
            Loremipsumsit amet consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
