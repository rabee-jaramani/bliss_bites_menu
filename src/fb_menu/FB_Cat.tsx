import React from "react";
import Card from "./Card";

export default function FB_CAT({ category }: any) {
  return (
    <div className="fb-cat-container">
      <h2
        className="fb-cat-title"
        id={category.categoryName.replace(/\s/g, "_").toLowerCase()}
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
