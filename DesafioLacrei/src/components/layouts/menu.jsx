import * as React from 'react';
import {NavLink,useLocation} from 'react-router-dom'
import {NavData} from './NavData'


function Menu(){
    return(       
    <> 
    

        <ul className="list">
            {NavData.map((item,index)=>{
                return(
                    <li  key={index} className="item" >
                        <NavLink  to={item.Path}  className={({ isActive }) => isActive ? "active" : ""}> {item.title} </NavLink> 
                    </li> 
                )
            })} 
        </ul>
    </>
    )
}
export default Menu