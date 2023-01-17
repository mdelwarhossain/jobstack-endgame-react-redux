import React, { useEffect, useState } from "react";
import clockbg from '../../../assest/images/clock.jpg'

const LeftSideCard = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (

       <div
      className="hero"
      style={{ backgroundImage: `url(${clockbg})`, height: "250px"}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl font-bold">
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })}
          </h1>
          <p className="mb-5">
          {dateState.toLocaleDateString('en-GB', {
             day: 'numeric',
             month: 'short',
             year: 'numeric',
          })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;
