import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
import data from '../../Utils/accordion.js';

const Value = () => {
  return (
    <section className="v-wrapper flexCenter">
      <div className="paddings innerWidth flexEven v-container">
        {/* left side */}
        <div className="flexCenter extra-right">
          <div className="image-container">
            <img src="./main2.jpg" alt="" className="image-fit" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span style={{ color: "White" }}>
            We always help you! to find the best properties at attractive prices<br />Best service you can get is from us related to buying the best property
          </span>
          <Accordion allowZeroExpanded className='accordion'>
          {data.map((item, index) => (
            <AccordionItem key={index} className='accordionItem'>
              <AccordionItemHeading>
                <AccordionItemButton className='accordionButton'>
                  <span className="icon">{item.icon}</span>
                  <span className="heading">{item.heading}</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordionPanel'>
                <p>{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
