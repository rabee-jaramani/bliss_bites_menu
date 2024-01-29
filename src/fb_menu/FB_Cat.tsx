import React, { useEffect, useRef } from "react";
import Card from "./Card";

export default function FB_CAT({ category,setSelectedCategory }: any) {


  function isInViewport(element:any) {
    var rect = element.getBoundingClientRect();
    console.log("rect.top from FB CAT",rect.top)
    return (
      rect.top <= 300
    );
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
        setSelectedCategory(category.categoryName);
      }
    }, 200); // Adjust the debounce time as needed

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="fb-cat-container">
      <h2
        className="fb-cat-title"
        id={category.categoryName.replace(/[\s-']/g, "").toLowerCase()}
        ref={targetElementRef}
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
