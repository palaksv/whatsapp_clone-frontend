import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem,styled } from "@mui/material";
import { useState } from "react";


const MenuOption=styled(MenuItem)`
font-size:14px;
color:#4A4A4A;
padding:10px 25px 5px 24px

`


const HeaderMenu = ({setopenDrawer}) => {
  const [open, setopen] = useState(false);

  const handleClose = () => {
    setopen(false);
  };
  const handleClick = (e) => {
    setopen(e.currentTarget);
  };

  return (
    <>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={()=>{handleClose(); setopenDrawer(true);} }>Profile</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
