import React, { useEffect, useState } from "react";
import "./card.scss";

const Card = ({ icon, title, followers }) => (
  <div className='card'>
    <div className='card-content'>
      <i className={`fa-brands fa-${icon}`}></i>
      <h2>{title}</h2>
      <p>
        Followers: <span>{followers}</span>
      </p>
      <a href='#'>
        <i className='fa-solid fa-link'></i>
        <span>Follow me</span>
      </a>
    </div>
  </div>
);

const CardContainer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.setProperty("--mouse-x", `${mousePos.x}px`);
      card.style.setProperty("--mouse-y", `${mousePos.y}px`);
    });
  }, [mousePos]);

  return (
    <div id='cards' onMouseMove={handleMouseMove}>
      <Card icon='instagram' title='Instagram' followers='33K' />
      <Card icon='github' title='GitHub' followers='330' />
      <Card icon='linkedin' title='LinkedIn' followers='550' />
    </div>
  );
};

export default CardContainer;
