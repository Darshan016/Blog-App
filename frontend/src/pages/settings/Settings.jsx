import './settings.css'
import SideBar from '../../components/sidebar/SideBar'

export default function Settings() {
  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateAccount">Update your account</span>
                <span className="settingDeleteAccount">Delete your account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://www.universetoday.com/wp-content/uploads/2010/02/Full-Moon.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className=" settingIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='darshan' />
                <label>Email</label>
                <input type="text" placeholder='darshan@gmail.com' />
                <label>Passowrd</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}
