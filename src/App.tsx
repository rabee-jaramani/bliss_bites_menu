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
          top: element.offsetTop-130,
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
          top: element.offsetTop-100,
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
const menu_collections=[...food_collections,...drinks_collections,...desserts_collections]
const menu_categories=[...food_categories,...drinks_categories,...desserts_categories]

  // state to handle fb_type change food drinks dessrts
  const [selectedFB_type, setSelectedFB_type] = useState("Food");

  // state to be rendered food_full_menu drinks_full_menudesserts_full_menu
  // const [FB_List_To_Render, setFB_List_To_Render] = useState(food_full_menu_2);

  // selected Collection
  const [selectedCollection, setSelectedCollection] = useState("ALL DAY BREAKFAST");

  // selected Category
  const [selectedCategory, setSelectedCategory] = useState("Acai of Relief");

  // collections to render in tabs
  const [selectedCollectionsTabs, setSelectedCollectionsTabs] =
    useState(menu_collections);
  // collections to render in tabs
  const [selectedCategoriesTabs, setSelectedCategoriesTabs] =
    useState(menu_categories);

  // replace the render new list with scolling to that list since all are already rendered
  const handleFB_Change = () => {
    if (selectedFB_type === "Food") {
      setSelectedFB_type("Food");
      // setFB_List_To_Render(food_full_menu_2);
      // setSelectedCollectionsTabs(food_collections);
      // setSelectedCategoriesTabs(food_categories);
    }
    if (selectedFB_type === "Drinks") {
      setSelectedFB_type("Drinks");
      // setFB_List_To_Render(drinks_full_menu_2);
      // setSelectedCollectionsTabs(drinks_collections);
      // setSelectedCategoriesTabs(drinks_categories);
    }
    if (selectedFB_type === "Desserts") {
      setSelectedFB_type("Desserts");
      // setFB_List_To_Render(desserts_full_menu_2);
      // setSelectedCollectionsTabs(desserts_collections);
      // setSelectedCategoriesTabs(desserts_categories);
    }
    // if (selectedFB_type === "Cloud Kitchen") {
    //   setSelectedFB_type("Cloud Kitchen");
    //   setFB_List_To_Render(cloud_kitchen_full_menu);
    // }
    scrollTo("fb-menu", "fb");
  };

  useEffect(() => {
    
  const stickyElem = document.getElementById("top_menu");
  const currStickyPos = stickyElem?stickyElem.getBoundingClientRect().top+ window.pageYOffset:'';
  window.onscroll = function () {
      /* Check if the current Y offset
      is greater than the position of
      the element */
      if(stickyElem){
        if (window.pageYOffset > currStickyPos) {
          stickyElem.classList.add('fixed-top')
      } else {
        stickyElem.classList.remove('fixed-top')

      }
      }

  }
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
          selectedFB_type='Drinks'
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={drinks_full_menu_2}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type='Desserts'
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
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
