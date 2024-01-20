import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ScrollableTabsMenuProps } from "../interfaces";

const ScrollableTabsMenu: React.FC<ScrollableTabsMenuProps | any> = ({
  selectedCollectionsTabs,
  selectedCollection,
  setSelectedCollection,
  scrollTo,
}: any) => {
  // const [isSticky, setIsSticky] = React.useState(false);

  // function for sticky heading menu

  // this state to get the STRING selected from tabs
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setSelectedCollection(newValue);
    scrollTo("collection", newValue);
  };
  return (
    <div className="scrollable-tabs" id="tabs_div">
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: "100%" },
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={selectedCollection}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
          allowScrollButtonsMobile
        >
          {selectedCollectionsTabs.map((item: any, index: any) => (
            <Tab key={index} label={item} value={item} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default ScrollableTabsMenu;
