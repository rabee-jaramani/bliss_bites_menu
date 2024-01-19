import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ScrollableTabsMenuProps } from "../interfaces";

const ScrollableTabsMenu: React.FC<ScrollableTabsMenuProps | any> = ({
  FB_List_To_Render,
}: any) => {
  console.log("FB_List_To_Render from scroll tabs", FB_List_To_Render[0]);
  const [selectedCollection, setSelectedCollection] = React.useState("");
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // this state to get the STRING selected from tabs
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setSelectedCollection(newValue);
  };

  React.useEffect(() => {
    // trigger a function to chnage the context when a tab clicked
    console.log(selectedCollection);
    scrollToElement(selectedCollection);
  }, [selectedCollection]);
  return (
    <div className="scrollable-tabs">
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
          {FB_List_To_Render.map((item: any, index: any) => (
            <Tab
              key={index}
              label={item.categoryName}
              value={item.categoryName}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default ScrollableTabsMenu;
