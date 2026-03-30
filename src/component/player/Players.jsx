import "./players.css";
//icons
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function Players()
{
    return(
        <main className="flex main-player">
            <section className="section-left flex">
               <div className="flex main-div-players">
                <div className="adkhr">
                    Adhkar
                </div>
                <div className="flex" style={{gap:"2px"}}>
                    <p>
                        lvjer <br/>4:10
                    </p>
                      

                <WbTwilightIcon style={{color:"#ffff8d"}} className="icons"/>
                </div>
              
               </div>
                <div className="flex main-div-players">
                <div className="adkhr">
                    Adhkar
                </div>
                <div className="flex" style={{gap:"2px"}}>
                    <p>
                        Douhr <br/>4:10
                    </p>
                      

                <WbSunnyIcon style={{color:"#ffff8d"}}  className="icons"/>
                </div>
              
               </div>
                <div className="flex main-div-players">
                <div className="adkhr">
                    Adhkar
                </div>
                <div className="flex" style={{gap:"2px"}}>
                    <p>
                       Laser <br/>4:10
                    </p>
                      

                <AccessTimeIcon style={{color:"#fafafa"}}  className="icons"/>
                </div>
              
               </div>
            </section>
              
            <section className="section-right flex ">
                <div className="flex main-div-players">
                <div className="adkhr">
                    Adhkar
                </div>
                <div className="flex" style={{gap:"1px",width:"60%"}}>
                    <p>
                        Lmakribe <br/>4:10
                    </p>
                      

                <Brightness1Icon style={{color:"#ffff8d"}}  className="icons"/>
                </div>
              
               </div>
                <div className="flex main-div-players">
                <div className="adkhr">
                    Adhkar
                </div>
                <div className="flex" style={{gap:"2px"}}>
                    <p>
                       Licha <br/>4:10
                    </p>
                <DarkModeIcon style={{color:"white"}}  className="icons"/>
                </div>
              
               </div>
            </section>
        </main>
    )
}