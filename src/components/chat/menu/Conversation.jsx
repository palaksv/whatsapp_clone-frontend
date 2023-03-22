import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { setConversation, getConversation } from "../../../service/api.js";
import { AccountContext } from "../../../context/AccountProvider";
import { formatDate } from "../../../utils/common-utils.js";

const Container = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  borderRadius: "50%",
  width: 47,
  height: 47,
  padding: "0 2px",
});

const Name = styled(Typography)`
  font-size: 15px;
  margin-top: 10px;
  margin-right: 20px;
`;

const ImageContainer = styled(Box)`
  margin: 10px 20px 10px 20px;
`;

const Component = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
`;

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <>
      <Container onClick={() => getUser()}>
        <ImageContainer>
          <Image src={user.picture} alt="dp" />
        </ImageContainer>
        <Box style={{ width: "100%" }}>
          <Component>
            <Name>{user.name}</Name>
            {message?.text && (
              <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
            )}
          </Component>
          <Box>
            <Text>
              {message?.text?.includes("localhost") ? "media" : message.text}   
               {/* url contains localhost (not for production) */}
            </Text>
            
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Conversation;
