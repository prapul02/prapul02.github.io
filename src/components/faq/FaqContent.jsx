import React, { useState } from "react";
import { accordionList } from "../../data/Data";

const FaqContent = () => {
  const [openAccordionId, setOpenAccordionId] = useState(0);

    const handleAccordionBtn = (itemId) => {
        setOpenAccordionId((prevState) => (prevState === itemId ? null : itemId));
    };
  return (
    <div className="faq-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="section-title title-center">
              Frequently asked <span>question</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="faq-box">
              {accordionList.map((item) =>(
                <div className="single-card" key={item.id}>
                  <div className="faq-header" role="button" onClick={() => handleAccordionBtn(item.id)}>
                    <h3>{item.title}</h3>
                    <div className="icon">
                      <i className={`fa-light ${openAccordionId === item.id ? 'fa-minus':'fa-plus'}`}></i>
                    </div>
                  </div>
                  <div className={`faq-body ${openAccordionId === item.id ? 'd-block':'d-none'}`}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam architecto error saepe magni tenetur, dolores eius
                      delectus, velit beatae neque, aliquam repudiandae quibusdam
                      rem cumque exercitationem necessitatibus eligendi ipsum
                      animi!
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
