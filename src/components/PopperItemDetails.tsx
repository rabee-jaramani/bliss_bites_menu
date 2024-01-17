import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';

export default function PopperItemDetails({itemDetails}:any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAway = (event: any) => {
    if (anchorEl && event.target instanceof Node && !anchorEl.contains(event.target)) {
      handleClose();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className='popup-div'>
      <button className='popup-button' aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{borderRadius:'5px',color:"#7d7d7d", border: 0, p: 2,paddingRight:"30px", bgcolor: '#E8E8E8', position: 'relative',boxShadow:'0 0 2px #fff',height:'fit-content',maxWidth:'380px' }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: 'absolute', top: 0, right: '10px' }}
            >
              <CloseIcon />
            </IconButton>
           {itemDetails}
          </Box>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}
