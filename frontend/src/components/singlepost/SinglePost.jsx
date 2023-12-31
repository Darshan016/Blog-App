import { useContext, useEffect, useState } from "react";
import "./singlepost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:3000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:3000/api/v1/posts/" + path, {
        data: { userName: user.userName },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:3000/api/v1/posts/" + path, {
        userName: user.userName,
        title,
        desc,
      });
      // window.location.reload()
      setUpdateMode(false);
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={publicFolder + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.userName === user?.userName && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.userName}`} className="link">
              <b> {post.userName}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
