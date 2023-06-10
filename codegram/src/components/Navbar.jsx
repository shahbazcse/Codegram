import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
        <Link to="/">
          <img src="" alt="Logo" />
          <p>Logo/App Name</p>
        </Link>
        <input placeholder="Search User" />
        <button>Dark mode button</button>
        <Link to="/profile">
          <img src="" alt="Profile picture" />
          <p>Profile</p>
        </Link>
      </nav>
    )
}