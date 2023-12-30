import './post.css'
import {Link} from 'react-router-dom'

export default function Post({post}) {
  return (
    <div className='post'>
        {post.photo &&(
            <img className='postImg' src="https://www.waifu.com.mx/wp-content/uploads/2023/05/Zero-Two-3.jpg" alt="" />
        )}
        
        <div className="postInfo">
            <div className="postCats">
                {post.categories.map((c)=>(
                    <span className="postCat">
                    {c}</span>

                ))}
                
            </div>
            <Link to={`/post/${post._id}`} className='link' >
            <span className="postTitle">{post.title}</span>

            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">{post.desc}</p>
    </div>
  )
}
