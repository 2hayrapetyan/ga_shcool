import { useState } from "react";
import dropdownicon from "../images/dropdown.png";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Изначально выбранная валюта - USD

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <>
      <div className='accordion-container'>
        <h2 onClick={toggleAccordion}>
          {selectedCurrency}{" "}
          <img
              src={dropdownicon}
              alt=''
              style={{
                transition: "all .3s ease-in-out",
                transform: isOpen ? "" : "rotate(180deg)",
              }}
            />
        </h2>
        {isOpen && (
          <div className='dropdown-currency'>
            <button id='button' onClick={() => handleCurrencyChange("AMD")}>
              AMD
            </button>
            <button id='button' onClick={() => handleCurrencyChange("USD")}>
              USD
            </button>
            <button id='button' onClick={() => handleCurrencyChange("JOD")}>
              JOD
            </button>
          </div>
        )}
      </div>
      <style>
        {`
    .accordion-container {
      flex:1;
      border: 1px solid #296778;
      border-radius: 8px;
      background-color: white;
      color: #06262f;
      font-size: 13px;
      font-weight: 500;
      border-radius: 8px;
    }
    
    .arrow {
      margin-left: 5px;
    }
    
    .dropdown-currency {
      display: flex;
      flex-direction: column;
    }
    
    #button {
        text-align: start;
        font-weight: 500 !important;
      border: none;
      cursor: pointer;
      color: inherit;
      background: white;
      border-radius: 9px;
    }
    
    #button:hover {
      background-color: #61B5CB;
    }
    
    h2 {
      margin: 0;
      padding: 4px 8px 4px 8px;
    }
    `}
      </style>
    </>
  );
}

export default Accordion;
