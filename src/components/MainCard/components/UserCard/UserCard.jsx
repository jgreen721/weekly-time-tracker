import React from 'react'
import { useAppContext } from '../../../../../appcontext'
import "./UserCard.css"


const UserCard = () => {
  const {user,category,setCategory} = useAppContext();
  const categories=[
    {id:1,name:"Daily",value:"daily"},
    {id:2,name:"Weekly",value:"weekly"},
    {id:3,name:"Monthly",value:"monthly"},
  ]
  return (
    <div className="users-card">
      <div className="users-card-col">
        <div className="avatar-div">
          <img className="avatar-img" src={user.img} alt="" />
        </div>
        <div className="users-info-div">
          <h5 className="thin muted">Report for</h5>
          <div className="users-name-div">
            <h2 style={{"--i":"3.25s"}}  className="thin rise-up-name">{user.name.first}</h2>
            <h2 style={{"--i":"4s"}} className="thin rise-up-name">{user.name.last}</h2>
          </div>
        </div>
      </div>
      {/* <div className="categories"> */}
        <ul className="categories">
          {categories.map(c=>(
            <li onClick={()=>setCategory(c.value)} key={c.id} className={category == c.value ? `category-item highlight` : `category-item muted`}>
              <h5 className={`mid-thin`}>{c.name}</h5>
            </li>
          ))}
        </ul>
      {/* </div> */}
    </div>
  )
}

export default UserCard