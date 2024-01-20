import React from "react";
import FB_CAT from "./FB_CAT";

export default function FB_COLLECTION({ collectionName, categories }: any) {
  console.log("From Collection component", categories);
  return (
    <div className="fb-collection-div">
      <h2
        className="collection-title"
        id={collectionName.replace(/\s/g, "_").toLowerCase()}
      >
        {collectionName}
      </h2>
      {categories.map((category: any) => {
        return <FB_CAT category={category} key={category.categoryName} />;
      })}
    </div>
  );
}