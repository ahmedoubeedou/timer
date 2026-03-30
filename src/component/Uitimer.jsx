import { useState } from 'react';
//icons mui
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
export default function Uitimer()
{
           const [visiblemenu , setvisiblemenu] = useState("visible");
           const [visibleBopbabe , setvisibleBopbabe] = useState(false)
           function eventClick()
           {
            if(visiblemenu==="visible")
            {
                setvisiblemenu("noVisible")
                setvisibleBopbabe(true)
            }
            else{
                setvisiblemenu("visible")
                setvisibleBopbabe(false)
            }
           }
    return(

        <div className="flex uicontainer">
             <div className="flex childuicontainer">
                
                <ExploreIcon style={{fontSize:"30"}} className='khble'/>
                <p>Player</p>
            </div>

           
             <div className=" bopabenone  childuicontainer">
                <p>LocationOn</p>
                <p>Today</p>
                <p>Timer</p>
                <p>Search</p>
            </div>
             <div></div>

             <div className='flex childeSerche'>
                
               lmoukih
               <SearchIcon/>
            </div>
           {visibleBopbabe?
            <div className="bopabe">
                <div className="flex  childuicontainer">
                   <p style={{direction:"rtl",width:"200%",marginTop:"-10px"}} onClick={eventClick}><CloseIcon/></p> 
                <p>LocationOn</p>
                <p className='divider'></p>
                <p>Today</p>
                  <p className='divider'></p>
                <p>Timer</p>
                  <p className='divider'></p>
                <p>Search</p>
                  <p className='divider'></p>
            </div>
            </div>:""}

            <div className="menu" onClick={eventClick}>
<MenuIcon style={{fontSize:"30px"}}/>
            </div>
        </div>
        
    )

}