import SearchIcon from '@mui/icons-material/Search';
import { Box,InputBase, styled } from '@mui/material';




const Component=styled(Box)`

background:#fff;
height:45px;
border-bottom:1px solid #f2f2f2;
display:flex;
align-items:center;
`;


const Wrapper=styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:8px
`;


const Icon=styled(Box)`
position:absolute;
height:100%;
padding:3px 8px;
color:#858585;
`


const Input=styled(InputBase)`
width:100%;
padding:15px;
padding-left:65px;
height:15px;
font-size:14px

`



const Search=({setText})=>{
    return(
<Component>
    <Wrapper>
        <Icon>
            <SearchIcon
            fontSize='small'
            />
        </Icon>
        <Input
        placeholder='Search or start a new chat'
        onChange={(e)=>setText(e.target.value)}
        />
    </Wrapper>
</Component>
    )
}


export default Search;