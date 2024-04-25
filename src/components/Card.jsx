/* eslint-disable react/prop-types */

import Accordion from "./Accordion";

function Card({ title, approach, lessons, duration, cost }) {
  return (
    <>
      <div className='card-parent'>
        <div className='card-title'>
          <h4 style={{ fontSize: "24px", fontWeight: "500" }}>{title}</h4>
          <span style={{ fontSize: "22px" }}>{approach}</span>
        </div>
        <div className='description'>
          <span className='more'>
            Number of lessons: <span>{lessons}</span>
          </span>
          <span className='more'>
            Duration of each lesson: <span>{duration} hour</span>
          </span>
          <span className='more'>
            Monthly cost:{" "}
            <span
              style={{ fontSize: "24px", fontWeight: "500", display: "flex" }}
            >
              {cost}{" "}
              <small style={{ fontSize: "13px" }}>
                {" "}
                <Accordion title='AMD' />
              </small>
            </span>
          </span>
        </div>
      </div>
      <style>{`
            .card-parent{
                width: 312px;
                display: flex;
                flex-direction: column;
                text-align:center;
                background: #296778;
                border-radius: 16px;
                box-shadow: 0 0 4px 1px rgba(41, 103, 120, 0.25);
            }
            
            .card-title{
                color: #FFF;
                margin: 19px 0 8px;
            }
            
            .description{
                padding: 16px 31px;
                border-radius: 16px 16px 15px 15px;
                background: #FFF;
                display: flex;
                flex-direction: column;
                text-align: start;
                gap: 7px;
            }
            .more{
              display:flex;
              align-items:baseline;
              gap:10px;
                font-weight: 500;
                font-size: 15px;
            }
            .more span{
                font-weight: 400;
                font-size: 16px;
                color: #296778;
            }`}</style>
    </>
  );
}

export default Card;
