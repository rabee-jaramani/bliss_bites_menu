import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ScrollableTabsMenuProps } from "../interfaces";
import { Avatar } from "@mui/material";
const ScrollableTabsMenu: React.FC<ScrollableTabsMenuProps | any> = ({
  selectedCollectionsTabs,
  selectedCollection,
  setSelectedCollection,
  scrollTo,
}: any) => {
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setSelectedCollection(newValue);
    scrollTo("collection", newValue);
  };
  return (
    <div className="scrollable-tabs" id="tabs_div">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={selectedCollection}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
          allowScrollButtonsMobile={true}
        >
          {selectedCollectionsTabs.map((item: any, index: any) => (
            <Tab
              key={index}
              label={item.menu_name}
              value={item.menu_name}
              icon={<Avatar alt="test avatar" src={item.menu_img} />}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default ScrollableTabsMenu;
