import { Drawer, Box, Typography,styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const Header=styled(Box)`
background:#008069;
height:100px;
color:#ffffff;
display:flex;
& > svg, &>p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
}

`;

const Component=styled(Box)`
background:#ededed;
height:85%;

`

const drawerStyle = {
  left: 20,
  top: 17,
  height: "100%",
  width: "30%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setopen }) => {
  const handleClose = () => {
    setopen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
<ArrowBackIcon onClick={()=>setopen(false)}  />
<Typography>Profile</Typography>
      </Header>

      <Component>
<Profile/>
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
