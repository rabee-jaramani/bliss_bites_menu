import React, { useEffect } from "react";
import FB_CAT from "./FB_CAT";

export default function FB_COLLECTION({ collectionName, categories,selectedCategory,setSelectedCategory }: any) {


  useEffect(() => {
    console.log("Selected cat: ",selectedCategory)

  }, [selectedCategory])
  
  return (
    <div className="fb-collection-div">
      <h2
        className="collection-title"
        id={collectionName.replace(/[\s-']/g, "").toLowerCase()}
      >
        {collectionName}
      </h2>
      {categories.map((category: any) => {
        return <FB_CAT category={category} key={category.categoryName} selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>;
      })}
    </div>
  );
}