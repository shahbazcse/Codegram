import "./App.css";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Booksmarks from "./pages/Bookmarks";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <main className="relative max-w-[1400px] mx-auto">
        <Sidebar />
        <div className="flex gap-6">
          <section  className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-gray-400 text-white py-2">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/bookmarks" element={<Booksmarks />} />
              <Route path="/liked" element={<Liked />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </section>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
