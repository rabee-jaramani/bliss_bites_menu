import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KebabDiningOutlinedIcon from "@mui/icons-material/KebabDiningOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
export default function BottomNav({
  selectedFB_type,
  setSelectedFB_type,
  handleFB_Change,
}: any) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedFB_type(newValue);
  };

  return (
    <div className="bottom-nav">
      <Tabs
        value={selectedFB_type}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<KebabDiningOutlinedIcon fontSize="small" />}
          label="Food"
          value="Food"
        />
        <Tab
          icon={<RamenDiningOutlinedIcon fontSize="small" />}
          label="Drinks"
          value="Drinks"
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
