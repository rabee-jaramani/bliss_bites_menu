import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
export default function BottomNav({
  selectedFB_type,
  setSelectedFB_type,
  handleFB_Change,
  selectedCollection,
  setSelectedCollection,
  scrollTo
}: any) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedFB_type(newValue);
    if(newValue==='Food'){
      setSelectedCollection('BREAKFAST');
      scrollTo("collection", 'BREAKFAST');
    }
    if(newValue==='Beverages'){
      setSelectedCollection('BEVERAGES');
      scrollTo("collection", 'BEVERAGES');
    }
    if(newValue==='Desserts'){
      setSelectedCollection('BLISSFUL DESSERTS');
      scrollTo("collection", 'BLISSFUL DESSERTS'); 
    }
    
  };

  return (
    <div className="bottom-nav">
      <Tabs
        value={selectedFB_type}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<RestaurantIcon fontSize="small" />}
          label="Food"
          value="Food"
        />
        <Tab
          icon={<LocalBarIcon fontSize="small" />}
          label="Beverages"
          value="Beverages"
        />
        <Tab
          icon={<CookieOutlinedIcon fontSize="small" />}
          label="Desserts"
          value="Desserts"
        />
        <Tab
          icon={<CloudOutlinedIcon fontSize="small" />}
          label="Cloud Kitchen"
          value="Cloud Kitchen"
        />
      </Tabs>
    </div>
  );
}
