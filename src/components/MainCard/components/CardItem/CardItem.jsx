import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../../../appcontext';
import "./CardItem.css";



const Loader = ({className})=>{


  return (
    <div className={`loader ${className}`}></div>
  )
}



const CardItem = ({item}) => {
  const {category,loaded,theme} = useAppContext();
  const [val,setVal] = useState(-1)
  const [prevVal, setPrevVal] = useState(-1)
  // const [renderedDaily,setRenderedDaily] = useState(false)
  const [renderedWeekly,setRenderedWeekly] = useState(false)
  const [renderedMonthly,setRenderedMonthly] = useState(false)




  useEffect(()=>{
      // console.log('category changed!');
      if(!renderedMonthly || !renderedMonthly){
      setVal(-1);
      setPrevVal(-1);
      let timeRange = Math.random() * 3500 | 0;
      if(!loaded)timeRange += 2250 
      if(category == "weekly")setRenderedWeekly(true)
      if(category == "monthly")setRenderedMonthly(true)
      setTimeout(()=>{
        setVal(item.timeframes[category].current)
        setPrevVal(item.timeframes[category].previous)
      },timeRange);
        
      }
      else{
        setVal(item.timeframes[category].current);
        setPrevVal(item.timeframes[category].previous)

      }
      },[category])
  return (
    <li className="card-item">
      <div className={`highlight-row bg-${item.color}`}>
        <img className="item-icon" src={item.icon} alt="" />
      </div>
      <div className="top-transparent-row"></div>
      <div className="card-item-content">
        <div className="card-item-top-row">
          <h3 className="card-category-h3 mid-thin">{item.title}</h3>
          <img src={theme == "dark" ? "./images/icon-ellipsis.svg" : "./images/icon-ellipsis-light.svg"}  alt="" />
        </div>
        <div className="card-item-bottom-content">
          {val > -1 ?
          <div className="card-data-row">
            <h1 className="card-h1 animate-data">{val}</h1>
            <h1 className="card-h1">hrs</h1>
          </div>
          : 
          <Loader className="h1-loader"/> }


          {prevVal > -1 ? 
          <h5 className="muted mid-thin animate-data">Last Week - {item.timeframes[category].previous}hrs</h5>
          :
          <Loader className="h5-loader"/>
}
        </div>
      </div>
    </li>
  )
}

export default CardItem