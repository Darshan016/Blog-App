import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'
import axios from 'axios'
import { useLocation } from 'react-router'

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()
  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/posts'+search);
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts()    
  },[search])
  return (
    <>
        <Header />
    <div className='home'>
        <Posts posts={posts} />
        <SideBar/>
    </div>
    </>
  )
}
