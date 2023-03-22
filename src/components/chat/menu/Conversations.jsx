//to call api as soon as componnet is loaded -->  useEffect
import { useEffect, useState, useContext } from "react";
import { Box, styled, Divider } from "@mui/material";
import { getUsers } from "../../../service/api.js";
import Conversation from "./Conversation.jsx";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider=styled(Divider)`

margin: 0 0 0 80px;
background:#e9edef;
opacity:0.6;
`

const Conversations = ({text}) => {
  const [users, setUsers] = useState([]);

  const { account,socket ,setActiveUsers} = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

useEffect(()=>{

socket.current.emit('addUsers',account);
socket.current.on("getUsers",users=>{
  setActiveUsers(users);
})
},[account])

  return (
    <Component>
      {
        //loop the users array
        users.map(
          (user) =>
            user.sub !== account.sub && (
              <>
                <Conversation user={user} />
                <StyledDivider />
              </>
            )
        )
      }
    </Component>
  );
};

export default Conversations;
