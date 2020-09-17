import React from 'react';
import Images from './Images';

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="Cards">
        <div className="Card">
          {/* <img src={props.imgsrc} alt="myPic" className="card__img" /> */}
          
            <Images imgsrc ={props.imgsrc} />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
