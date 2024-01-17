import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ScrollableTabsMenuProps, SelectedCategory_Interface } from '../interfaces';
import placeholder from '../images/placeholder.webp'



const ScrollableTabsMenu: React.FC<ScrollableTabsMenuProps> = ({ category_types }) => {
const [value, setValue] = React.useState('k')
// this state to get the STRING selected from tabs
//   const [selectedCategoryTypeTab, setSelectedCategoryTypeTab] = React.useState('Appetizers');
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    // setSelectedCategoryTypeTab(newValue);
    setValue(newValue)
  };


React.useEffect(()=>{
// trigger a function to chnage the context when a tab clicked
},)
  return (
      <>
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: '100%', sm: 480 },
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
        allowScrollButtonsMobile
      >
        {category_types.map((item, index) => (
          <Tab key={index} label={item.categoryName} value={item.categoryName} />
        ))}
      </Tabs>
    </Box>
    </>
  );
};

export default ScrollableTabsMenu;
