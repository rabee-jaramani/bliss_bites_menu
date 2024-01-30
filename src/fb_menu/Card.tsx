import React from "react";
import ModalPopUp from "../components/ModalPopUp";
export default function Card({ item }: any) {
  return (
    <div className="card">
      <img src={item.image} alt={item.itemName} />
      <div className="item-details-div">
        <h3 className="item-name">{item.itemName}</h3>
        <p className="item-description">
          {item.description.length > 45
            ? item.description.slice(0, 45) + "..."
            : item.description}
        </p>
        {item.allergies[0] ? (
          <div className="allergies-div">
            {item.allergies.map((icon: any) => {
              return (
                <img key={icon.toString()} src={icon} alt={icon.toString()} />
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className="price-readmore">
          <p className="add-on">Add On</p>
          <h3 className="item-price">
            <span className="aed">AED</span>
            {item.price}
          </h3>
        </div>
      </div>
      <ModalPopUp itemDetails={item} />
    </div>
  );
}
