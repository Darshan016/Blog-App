import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SideBar() {
  const {user} = useContext(Context)
  const publicFolder = 'http://localhost:3000/images/'
  const [cats,setCats] = useState([])
  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get('http://localhost:3000/api/v1/categories')
      setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        {user &&(
          <img width={200} height={200} src={publicFolder+user.profilePicture}alt="" />
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          ipsum ex quibusdam!
        </p>
      </div>
      <div className="sideBarItem">

        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          {cats.map((c)=>(
            <Link to={`/?cats=${c.name}`} className='link' >
            <li className="sideBarListItem">{c.name}</li>
            </Link>

          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Follow Us</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-x-twitter"></i>
          <i className="sideBarIcon fa-brands fa-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
