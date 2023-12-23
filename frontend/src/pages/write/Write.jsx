import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img src="https://www.universetoday.com/wp-content/uploads/2010/02/Full-Moon.jpg" alt="" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" placeholder='share your story' type='text'></textarea>
            </div>
            <button className="writePublish">Publish</button>
        </form>

    </div>
  )
}
