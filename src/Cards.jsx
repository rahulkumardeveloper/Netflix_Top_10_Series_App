import React from 'react';

function Cards(Props) {
    return (
        <div className="cards">
            <img src={Props.imagesrc} alt="firstimage" className="card_img" />

            <div className="card_info">
                <span className="card_category">{Props.title}</span>
                <h3 className="card_sname">{Props.sname}</h3>
                <a href={Props.link}>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>)
}
export default Cards;