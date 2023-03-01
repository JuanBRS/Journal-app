import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { SidBar } from "../components";
import { NavBar } from "../components/NavBar";



const drawerWith = 340;

export const JournalLayout = ({children}) => {
  return (

    <Box sx= {{display: 'flex'}}>

      <NavBar drawerWith ={ drawerWith } />
      <SidBar drawerWith={drawerWith}/>



    <Box
 component = "main"
 sx ={{ flexGrow: 1, p: 3 }}
   >
<Toolbar/>


{children}

  </Box>
</Box>
  
  )
}
