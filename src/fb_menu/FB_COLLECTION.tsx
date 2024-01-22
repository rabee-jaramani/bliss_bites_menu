import React, { useEffect } from "react";
import FB_CAT from "./FB_CAT";

export default function FB_COLLECTION({ collectionName, categories,selectedCategory,setSelectedCategory,selectedCollection,setSelectedCollection }: any) {


  function isInViewport(element:any) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top <= 150 
    );
  }
  useEffect(() => {
    const targetElement = document.getElementById(collectionName.replace(/[\s-']/g, "").toLowerCase());
    window.addEventListener('scroll', ()=>isInViewport(targetElement)?setSelectedCollection(collectionName):'');
  });

  
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
        setSelectedCategory={setSelectedCategory} selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}/>;
      })}
    </div>
  );
}