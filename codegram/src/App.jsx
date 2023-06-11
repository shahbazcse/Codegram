import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RightSidebar from "./components/RightSidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <main className="relative max-w-[1400px] mx-auto">
        <Sidebar/>
        <div className="flex gap-6">
          <Feed/>
          <RightSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Booksmarks />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
