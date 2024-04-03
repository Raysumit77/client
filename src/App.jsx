import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Bookmark } from "./pages/Bookmark";
import { Contact } from "./pages/Contact";
import { ForgetPassword } from "./pages/ForgetPassword";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { VerifyPassword } from "./pages/VerifyPassword";
import { About } from "./pages/About";
import { AdminBlogs } from "./admin/Blogs";
import { AdminUsers } from "./admin/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-password" element={<VerifyPassword />} />
        {/* Normal User */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookmark" element={<Bookmark />} />
        {/* Admin User Route */}
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </>
  );
}

export default App;
