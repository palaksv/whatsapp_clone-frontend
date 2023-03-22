import { useContext,useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 45px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > *{
    margin:2px;
    padding:6px;
    color:#858585;
  }

  & :first-child{
   font-size:22px;
   margin-top:2px;
   margin-right:7px
  }
`;

const Image = styled("img")({
  height: 35,
  width: 35,
  borderRadius: "50%",
});

const Header = () => {


const [openDrawer,setopenDrawer]=useState(false);

  const { account } = useContext(AccountContext);

  const toggledrawer=()=>{
    setopenDrawer(true);
  }

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" 
        onClick={()=>toggledrawer()}
         />
        <Wrapper>
          <ChatIcon />
         <HeaderMenu setopenDrawer={setopenDrawer}/>
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setopen={setopenDrawer}  />
    </>
  );
};

export default Header;
