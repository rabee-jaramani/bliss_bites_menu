import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import BottomNav from "./components/BottomNav";
// import ScrollableTabsMenu from './components/ScrollableTabsMenu';
import Footer from "./footer/Footer";
// import { food_full_menu } from "./data";

import { food_full_menu_2 } from "./data2";
import { drinks_full_menu_2 } from "./data2";
import { desserts_full_menu_2 } from "./data2";
import { food_collections } from "./data2";
import { drinks_collections } from "./data2";
import { desserts_collections } from "./data2";
// import { food_categories } from "./data2";
// import { drinks_categories } from "./data2";
// import { desserts_categories } from "./data2";
import FB_MENU from "./fb_menu/FB_MENU";
import TopMenu from "./top_menu/TopMenu";
function App() {
  const scrollTo = (where: string, tabName: string) => {
    if (where === "collection") {
      const element = document.getElementById(
        tabName.replace(/\s/g, "_").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
    if (where === "category") {
      const element = document.getElementById(
        tabName.replace(/\s/g, "_").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
    if (where === "fb-menu") {
      const scrollStep = -window.scrollY / (500 / 10); // Adjust the speed as needed

      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  };

  // state to handle fb_type change food drinks dessrts
  const [selectedFB_type, setSelectedFB_type] = useState("Food");
  // state to be rendered food_full_menu drinks_full_menudesserts_full_menu
  const [FB_List_To_Render, setFB_List_To_Render] = useState(food_full_menu_2);

  // selected Collection
  const [selectedCollection, setSelectedCollection] = useState("");

  // selected Category
  // const [selectedCategory, setSelectedCategory] = useState("");

  // collections to render in tabs
  const [selectedCollectionsTabs, setSelectedCollectionsTabs] =
    useState(food_collections);
  const handleFB_Change = () => {
    if (selectedFB_type === "Food") {
      setSelectedFB_type("Food");
      setFB_List_To_Render(food_full_menu_2);
      setSelectedCollectionsTabs(food_collections);
    }
    if (selectedFB_type === "Drinks") {
      setSelectedFB_type("Drinks");
      setFB_List_To_Render(drinks_full_menu_2);
      setSelectedCollectionsTabs(drinks_collections);
    }
    if (selectedFB_type === "Desserts") {
      setSelectedFB_type("Desserts");
      setFB_List_To_Render(desserts_full_menu_2);
      setSelectedCollectionsTabs(desserts_collections);
    }
    // if (selectedFB_type === "Cloud Kitchen") {
    //   setSelectedFB_type("Cloud Kitchen");
    //   setFB_List_To_Render(cloud_kitchen_full_menu);
    // }
    scrollTo("fb-menu", "fb");
  };

  useEffect(() => {
    handleFB_Change();
  }, [selectedFB_type]);
  return (
    <div className="App">
      <div className="app-container">
        <Banner />
        <TopMenu
          selectedCollectionsTabs={selectedCollectionsTabs}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          scrollTo={scrollTo}
        />
        <FB_MENU
          selectedFB_type={selectedFB_type}
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={FB_List_To_Render}
        />
        <BottomNav
          selectedFB_type={selectedFB_type}
          setSelectedFB_type={setSelectedFB_type}
          handleFB_Change={handleFB_Change}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
