import React from "react";
import ScrollableTabsMenu from "../components/ScrollableTabsMenu";

export default function TopMenu({
  selectedCollectionsTabs,
  selectedCollection,
  setSelectedCollection,
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
    </div>
  );
}
