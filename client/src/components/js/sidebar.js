
import { useState } from 'react';
import '../css/sidebar.css';



const Sidebar =()=> {
    const [raidDropDown, setRaidDropDown] = useState(false);
    const [legion, setLegion] = useState(false);
    const [abyss, setAbyss] = useState(false);

    const Raid =()=>{
        return(
            <div>
            <div className='sidebar_page' onClick={() => {setLegion(!legion)}}>
                군단장
            </div>
            {legion && 
            <ul style={{listStyle :"none", color :"white"}}>
                <li>발탄</li>
                <li >비아키스</li>
                <li >쿠크세이튼</li>
                <li>아브렐슈드</li>
                <li>일리아칸</li>
            </ul>
            }

            <div className='sidebar_page' onClick={() => {setAbyss(!abyss)}}>
                어비스 던전
            </div>
            {abyss && 
            <ul style={{listStyle :"none", color :"white"}}>
                <li>카양겔 노말</li>
                <li>카양겔 하드</li>
                <li>상아탑 노말</li>
                <li>상아탑 하드</li>
                
            </ul>
            }
            </div>
        );
    }
    return (
        <>
            <div className='sidebar_all'>
                <div className='sidebar_Logo' href="#"> LOAIN</div>
                <div className='sidebar_page'>icon   PAGE 1</div>
                <div className='sidebar_page' onClick={() => {
                    setRaidDropDown(!raidDropDown)
                    if(raidDropDown === false){
                        setLegion(false);
                        setAbyss(false);
                    }
                    }} >
                    icon   레이드 {raidDropDown ? '▲' : '▼'}                   
                </div>
                {raidDropDown && <Raid />}
                <div className='sidebar_page'>icon   PAGE 3</div>
                <div className='sidebar_page'>icon   PAGE 4</div>
                <div className='sidebar_page'>icon   PAGE 5</div>
            </div>
        </>
    )
}


export default Sidebar;