import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img width={200} height={200} src="https://images7.alphacoders.com/129/1299888.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          ipsum ex quibusdam!
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Nature</li>
          <li className="sideBarListItem">Food</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Sports</li>
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
