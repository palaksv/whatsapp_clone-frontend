import { Box, styled, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Pic = styled("img")({
  width: 170,
  height: 170,
  borderRadius: "50%",
  padding: "25px 0",
});

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const BoxWrapper = styled(Box)`
  background: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 08);
  & :first-child {
    font-size: 14px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 8px 0;
    color: #4a4a4a;
  }
`;


const DescriptionContainer=styled(Box)`
padding:15px 20px 20px 30px;
& :first-child{
    color:#858585;
    font-size:13px;
}
`


const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Pic src={account.picture} alt="dp" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat | Sleep | Code | Repeat</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
