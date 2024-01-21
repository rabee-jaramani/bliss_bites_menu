import React from "react";
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
  return (
    <div className="top-menu-div">
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
  );
}
