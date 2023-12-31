import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
import { useContext,useState } from "react";
import { Context}  from "../../context/Context";
import axios from "axios";

export default function Settings() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [file, setFile] = useState("");
    const {user, dispatch} = useContext(Context)
    const [success,setSuccess] = useState(false)
    const publicFolder = 'http://localhost:3000/images/'

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:'UPDATE_START'})
        const updatedUser = {
          userId: user._id,
          userName,
          email,
          password,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          updatedUser.profilePicture = fileName;
          try {
            await axios.post("http://localhost:3000/api/v1/upload", data);
          } catch (err) {}
        }
        try {
       const res=await axios.put(
            "http://localhost:3000/api/v1/users/"+user._id,updatedUser
          );
          setSuccess(true)
          dispatch({type:'UPDATE_SUCCESS',payload:res.data})
        //   window.location.replace("/post/" + resp.data._id);
        } catch (error) {
            dispatch({type:'UPDATE_FAILURE'})
        }
      };
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateAccount">Update your account</span>
          <span className="settingDeleteAccount">Delete your account</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src={file?URL.createObjectURL(file):publicFolder+user.profilePicture}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.userName} onChange={(e)=>setUserName(e.target.value)} />
          <label>Email</label>
          <input type="text" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} />
          <label>Passowrd</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingSubmit" type="submit">Update</button>
          {success && (
            <span style={{color:'green', marginTop:"20px", textAlign:"center"}}>You Account Has Been Updated. </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
