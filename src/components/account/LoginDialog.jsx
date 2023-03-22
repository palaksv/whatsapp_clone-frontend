import { Dialog , Box , Typography, List, ListItem,styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";


const Component=styled(Box)`
display:flex
`;

const Container=styled(Box)`
padding:56px 0 56px 56px
`;

const QRcode=styled('img')({
    height:250,
    width:250,
    margin:'40px 0 0 40px'
});


const Title=styled(Typography)`
font-size:20px;
color:#525252;
margin-bottom:20px
`
const StyledList=styled(List)
`
  & > li
  {
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:25px;
    color:#4a4a4a
  }
`

const dialogStyle={
  height:'95%',
  marginTop:'12%',
  width:'60%',
  maxWidth:'100%',
  maxHeight:'100%',
  boxShadow:'none',
  overflow:'hidden'   // no scrollbar needed
}

const LoginDialog=()=>{


const {setAccount} = useContext(AccountContext);


 const onLoginSuccess=async (res)=>{
    const decoded=jwt_decode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);
 }

 const onLoginError=(res)=>{
     console.log("login failed",res);
 }

  return(
    <Dialog open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    >
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu settings and select WhatsApp web </ListItem>
            <ListItem>3. Point your phone to the screen to capture your code</ListItem>
          </StyledList>
        </Container>
        <Box style={{position:'relative'}}>
          <QRcode src={qrCodeImage} alt="qr-code"></QRcode>
          <Box style={{position:'absolute',top:'50%',transform:'translateX(18%)'}}>
            <GoogleLogin
               onSuccess={onLoginSuccess}
               onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog;