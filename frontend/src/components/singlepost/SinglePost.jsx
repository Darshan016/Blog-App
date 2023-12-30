import { useEffect, useState } from 'react'
import './singlepost.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation()
  const path=location.pathname.split("/")[2]
  const [post,setPost] = useState({})
  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get('http://localhost:3000/api/v1/posts/'+path)
      setPost(res.data)
    }
    getPost()
  },[path])

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
           <img src="https://www.universetoday.com/wp-content/uploads/2010/02/Full-Moon.jpg" alt="" className="singlePostImg" />
        )}
       
        <h1 className="singlePostTitle">{post.title}
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i></div></h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:  <Link to={`/?user=${post.userName}`} className="link">
              <b> {post.userName}</b></Link></span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>{post.desc}</p>
        </div>  
    </div>
  )
}
