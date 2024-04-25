/* eslint-disable react/prop-types */
import { useState } from "react";
import dropdownicon from "../images/dropdown.png";

const DropDown = ({ title, content, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='dropdown' style={style}>
        <div className='dropdownHeader' onClick={() => setIsOpen(!isOpen)}>
          <span> {title}</span>
          <span>
            {" "}
            <img
              src={dropdownicon}
              alt=''
              style={{
                transition: "all .3s ease-in-out",
                transform: isOpen ? "" : "rotate(180deg)",
              }}
            />
          </span>
        </div>
        {isOpen && <div className='dropdownContent'>{content}</div>}
      </div>
      <style>
        {`
        .dropdown {
            min-width:800px;
            border: 1px solid #0F4B5B;
            background-color: #F0F5F9;
            color: #06262F;
            font-size: 16px;
            border-radius: 8px;
          }
          
          .dropdownHeader {
            font-size: inherit;
            color: inherit;
            background: inherit;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .dropdownContent {
            text-align: start;
            font-size: inherit;
            border-radius: 8px;
            background: inherit;
            padding: 12px;
            color: #06262F;
          }
        `}
      </style>
    </>
  );
};

export default DropDown;
