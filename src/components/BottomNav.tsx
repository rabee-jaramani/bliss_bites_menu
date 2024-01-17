import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import KebabDiningOutlinedIcon from '@mui/icons-material/KebabDiningOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
export default function BottomNav({selectedFB_type,setSelectedFB_type}:any) {

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedFB_type(newValue);
  };

  React.useEffect(() => {
console.log("FB Type",selectedFB_type)
  }, [selectedFB_type])
  
  return (
      <div className='bottom-nav'>
    <Tabs value={selectedFB_type} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<KebabDiningOutlinedIcon fontSize='small'/>} label="Food" value='Food'/>
      <Tab icon={<RamenDiningOutlinedIcon fontSize='small'/>} label="Drinks" value='Drinks'/>
      <Tab icon={<CookieOutlinedIcon fontSize='small'/>} label="Desserts" value='Desserts'/>
    </Tabs>
    </div>
  );
}
