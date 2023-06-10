import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <section>
          <LeftSidebar />
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
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
