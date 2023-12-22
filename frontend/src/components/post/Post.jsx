import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://www.waifu.com.mx/wp-content/uploads/2023/05/Zero-Two-3.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                    Life</span>
                <span className="postCat">
                    Music
                </span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit.</span>
            <hr />
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nisi aut ipsum ab molestias eius placeat nemo, aperiam culpa omnis qui velit optio facere adipisci quo nobis sit in laborum?
        Et omnis quidem rem eos cumque laudantium ex ullam mollitia, perspiciatis, incidunt saepe vel illum ratione eligendi nisi, aspernatur molestias consequatur libero nobis. Saepe dicta facere aliquam atque, sunt maxime!</p>
    </div>
  )
}
