import React, { useEffect, useRef } from "react";
import FB_CAT from "./FB_CAT";

export default function FB_COLLECTION({
  collectionName,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedCollection,
  setSelectedCollection,
}: any) {
  function isInViewport(element: any) {
    var rect = element.getBoundingClientRect();
    return rect.top <= 300;
  }
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const targetElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (targetElementRef.current && isInViewport(targetElementRef.current)) {
        setSelectedCollection(collectionName);
      }
    }, 200); // Adjust the debounce time as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="fb-collection-div">
      <h2
        className="collection-title"
        id={collectionName.replace(/[\s-']/g, "").toLowerCase()}
        ref={targetElementRef}
      >
        {collectionName}
      </h2>
      {categories.map((category: any) => {
        return (
          <FB_CAT
            category={category}
            key={category.categoryName}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
          />
        );
      })}
    </div>
  );
}
