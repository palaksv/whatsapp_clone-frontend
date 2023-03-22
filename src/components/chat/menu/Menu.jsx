import Header from "./Header";
import { Box } from "@mui/material";
import Search from "./Search";
import { useState } from "react";
import Conversations from "./Conversations";

const Menu=()=>{
    const [text,setText]=useState('');
    return(
        <Box>
            <Header/>
            <Search setText={setText}/>
            <Conversations text={text}/>
        </Box>

    )
}


export default Menu;