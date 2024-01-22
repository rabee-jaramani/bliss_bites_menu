import React, { useEffect } from "react";
import Card from "./Card";

export default function FB_CAT({ category,setSelectedCategory }: any) {


  function isInViewport(element:any) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top <= 150 
    );
  }
  useEffect(() => {
    const targetElement = document.getElementById(category.categoryName.replace(/[\s-']/g, "").toLowerCase());
    window.addEventListener('scroll', ()=>isInViewport(targetElement)?setSelectedCategory(category.categoryName):'');
  });

  return (
    <div className="fb-cat-container">
      <h2
        className="fb-cat-title"
        id={category.categoryName.replace(/[\s-']/g, "").toLowerCase()}
      >
        {category.categoryName}
      </h2>
      <div className="fb-cat-grid">
        {category.items.map((item: { itemName: any }) => {
          return <Card key={item.itemName} item={item} />;
        })}
      </div>
    </div>
  );
}
