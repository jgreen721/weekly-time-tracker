import React from 'react'
import { useAppContext } from '../../../appcontext';
import {CardItem,UserCard} from "./components"
import "./MainCard.css";


const MainCard = () => {
    const {items} = useAppContext();


    // console.log("items",items);

  return items.length ?  (
    <div className="main-content-area">
    <div className="main-card">
       <UserCard/>
        <ul className="items-grid">
            {items.map(item=>(
                <CardItem key={item.id} item={item}/>
            ))}
        </ul>
    </div>
    </div>
  ) :
  <h1>Loading...</h1>
  
}

export default MainCard