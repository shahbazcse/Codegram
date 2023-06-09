import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">
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
      <div>
        <section>
          <LeftSidebar />
        </section>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Booksmarks />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <section>
          <RightSidebar />
        </section>
      </div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
