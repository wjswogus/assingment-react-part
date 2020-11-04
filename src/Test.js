import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const Test = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const MenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const MenuClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div>
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={MenuClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={MenuClose}
            >
                <MenuItem onClick={MenuClose}>Profile</MenuItem>
                <MenuItem onClick={MenuClose}>My account</MenuItem>
                <MenuItem onClick={MenuClose}>Logout</MenuItem>
            </Menu>
            </div>
        </div>
    );
};

export default Test;