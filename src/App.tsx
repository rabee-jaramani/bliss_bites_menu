import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import BottomNav from './components/BottomNav';
// import ScrollableTabsMenu from './components/ScrollableTabsMenu';
import Footer from './footer/Footer';
import { food_full_menu } from './data'
import { drinks_full_menu } from './data'
import { desserts_full_menu } from './data'
import FB_MENU from './fb_menu/FB_MENU';
import ScrollableTabsMenu from './components/ScrollableTabsMenu';
function App() {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 10); // Adjust the speed as needed

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
// state to handle fb_type change food drinks dessrts
const [selectedFB_type, setSelectedFB_type] = useState("Food")
// state to be rendered food_full_menu drinks_full_menudesserts_full_menu
const [FB_List_To_Render, setFB_List_To_Render] = useState(food_full_menu)

const handleFB_Change=()=>{
  if(selectedFB_type==='Food'){
    setSelectedFB_type('Food')
      setFB_List_To_Render(food_full_menu)
  }
  if(selectedFB_type==='Drinks'){
    setSelectedFB_type('Drinks')
      setFB_List_To_Render(drinks_full_menu)
  }
  if(selectedFB_type==='Desserts'){
    setSelectedFB_type('Desserts')
      setFB_List_To_Render(desserts_full_menu)
  }
  scrollToTop()
}

    useEffect(() => {

    },)
  return (
    <div className="App">
      <div className='app-container'>
        <Banner/>
        <ScrollableTabsMenu FB_List_To_Render={FB_List_To_Render}/>
      <FB_MENU selectedFB_type={selectedFB_type} handleFB_Change={handleFB_Change} FB_List_To_Render={FB_List_To_Render}/>
      <BottomNav selectedFB_type={selectedFB_type} setSelectedFB_type={setSelectedFB_type}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
