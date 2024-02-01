import React, { useEffect, useState } from "react";
import ScrollableTabsMenu from "../components/ScrollableTabsMenu";
import ScrollableTabsMenu2 from "../components/ScrollableTabsMenu2";

export default function TopMenu({
  selectedCollectionsTabs,
  selectedCollection,
  setSelectedCollection,
  selectedCategoriesTabs,
  selectedCategory,
  setSelectedCategory,
  scrollTo,
}: any) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 600 ? true : false
  );

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > (isMobile ? 270 : 460)) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div
        className={`top-menu-div ${isScrolled ? "fixed-top" : ""}`}
        id="top_menu"
      >
        <ScrollableTabsMenu
          selectedCollectionsTabs={selectedCollectionsTabs}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          scrollTo={scrollTo}
        />
        <ScrollableTabsMenu2
          selectedCategoriesTabs={selectedCategoriesTabs}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          scrollTo={scrollTo}
        />
      </div>
      <div className={`spacer ${!isScrolled ? "fixed-top" : ""}`}></div>
    </>
  );
}
