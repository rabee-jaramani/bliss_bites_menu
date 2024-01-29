import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ScrollableTabsMenuProps } from "../interfaces";

const ScrollableTabsMenu2: React.FC<ScrollableTabsMenuProps | any> = ({
  selectedCategoriesTabs,
  selectedCategory,
  setSelectedCategory,
  scrollTo,
}: any) => {
  // const [isSticky, setIsSticky] = React.useState(false);

  // function for sticky heading menu

  // this state to get the STRING selected from tabs
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setSelectedCategory(newValue);
    scrollTo("category", newValue);
  };
  return (
    <div className="scrollable-tabs" id="tabs_div_2">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={selectedCategory}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
          allowScrollButtonsMobile={false}
          style={{backgroundColor:'rgb(241 253 255)',padding:'0 15px'}}
        >
          {selectedCategoriesTabs.map((item: any, index: any) => (
            <Tab key={index} label={item} value={item} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default ScrollableTabsMenu2;
