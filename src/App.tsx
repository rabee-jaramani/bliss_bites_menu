import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import BottomNav from './components/BottomNav';
import ScrollableTabsMenu from './components/ScrollableTabsMenu';
import FB_Menu from './fb_menu/FB_Menu';
import Footer from './footer/Footer';

function App() {
// state to handle fb_type change
const [selectedFB_type, setSelectedFB_type] = useState("Food")

    // function to get the categories and their items under selected type/ select food then load food categories and their items
    function filterMenuByType(menu:any, selectedType:string) {
      const filteredMenu = menu.filter((menuItem:any) => menuItem.type.toLowerCase() === selectedType.toLowerCase());
      return filteredMenu;
    }


    useEffect(() => {

    //  const listX=filterMenuByType(full_menu,'Drinks')
// console.log("dsdsd",listX[0].categories)
    },)
  return (
    <div className="App">
      <div className='app-container'>
        <Banner/>
      <FB_Menu selectedFB_type={selectedFB_type} setSelectedFB_type={setSelectedFB_type}/>
      <BottomNav selectedFB_type={selectedFB_type} setSelectedFB_type={setSelectedFB_type}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
