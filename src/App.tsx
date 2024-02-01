import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import BottomNav from "./components/BottomNav";
import Footer from "./footer/Footer";

import { food_full_menu_2 } from "./data2";
import { drinks_full_menu_2 } from "./data2";
import { desserts_full_menu_2 } from "./data2";
import { menu_collections } from "./data2";
import { food_categories } from "./data2";
import { drinks_categories } from "./data2";
import { desserts_categories } from "./data2";
import TopMenu from "./top_menu/TopMenu";
import FB_MENU from "./fb_menu/FB_MENU";
function App() {
  const scrollTo = (where: string, tabName: string) => {
    if (where === "collection") {
      const element = document.getElementById(
        tabName.replace(/[\s-']/g, "").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 190,
          behavior: "smooth",
        });
      }
    }
    if (where === "category") {
      const element = document.getElementById(
        tabName.replace(/[\s-']/g, "").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 180,
          behavior: "smooth",
        });
      }
    }
    if (where === "top") {
      const scrollStep = -window.scrollY / (500 / 10); // Adjust the speed as needed
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
      setSelectedCollection("BREAKFAST");
    }
  };
  const menu_categories = [
    ...food_categories,
    ...drinks_categories,
    ...desserts_categories,
  ];

  // state to handle fb_type change food drinks dessrts
  const [selectedFB_type, setSelectedFB_type] = useState("Food");

  // selected Collection
  const [selectedCollection, setSelectedCollection] = useState("BREAKFAST");

  // selected Category
  const [selectedCategory, setSelectedCategory] = useState("Acai of Relief");

  // collections to render in tabs
  const [selectedCollectionsTabs, setSelectedCollectionsTabs] =
    useState(menu_collections);
  // collections to render in tabs
  const [selectedCategoriesTabs, setSelectedCategoriesTabs] =
    useState(menu_categories);

  const handleFB_Change = () => {
    if (selectedFB_type === "Food") {
      setSelectedFB_type("Food");
    }
    if (selectedFB_type === "Drinks") {
      setSelectedFB_type("Drinks");
    }
    if (selectedFB_type === "Desserts") {
      setSelectedFB_type("Desserts");
    }
    // if (selectedFB_type === "Cloud Kitchen") {
    //   setSelectedFB_type("Cloud Kitchen");
    //   setFB_List_To_Render(cloud_kitchen_full_menu);
    // }
  };

  return (
    <div className="App">
      <div className="app-container">
        <Banner />
        <TopMenu
          selectedCollectionsTabs={selectedCollectionsTabs}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          selectedCategoriesTabs={selectedCategoriesTabs}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          scrollTo={scrollTo}
        />
        <FB_MENU
          selectedFB_type={selectedFB_type}
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={food_full_menu_2}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type="Drinks"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={drinks_full_menu_2}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type="Desserts"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={desserts_full_menu_2}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <BottomNav
          selectedFB_type={selectedFB_type}
          setSelectedFB_type={setSelectedFB_type}
          handleFB_Change={handleFB_Change}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          scrollTo={scrollTo}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
