import React from "react";
import FB_COLLECTION from "./FB_COLLECTION";
export default function FB_MENU({
  FB_List_To_Render,
  selectedCategory,
  setSelectedCategory,
  selectedCollection,
  setSelectedCollection,
}: any) {
  return (
    <div id="fb_menu">
      {FB_List_To_Render.map((collection: any) => {
        return (
          <FB_COLLECTION
            key={collection.parentCatName}
            collectionName={collection.parentCatName}
            categories={collection.parentCatCollection}
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
