import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Groups from "./pages/Groups";
import LearningHub from "./pages/LearningHub";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/learninghub" element={<LearningHub />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;