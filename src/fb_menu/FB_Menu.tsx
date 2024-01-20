import React from "react";
import FB_COLLECTION from "./FB_COLLECTION";
export default function FB_MENU({ FB_List_To_Render }: any) {
  return (
    <>
      {FB_List_To_Render.map((collection: any) => {
        return (
          <FB_COLLECTION
            key={collection.parentCatName}
            collectionName={collection.parentCatName}
            categories={collection.parentCatCollection}
          />
        );
      })}
    </>
  );
}
