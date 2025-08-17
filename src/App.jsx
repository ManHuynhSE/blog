import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "../src/pages/home/Home";
import Blog from "../src/pages/blog/Blog";
import AllBlogs from "../src/pages/allBlog/AllBlog";
import NoPage from "../src/pages/nopage/NoPage";
import BlogInfo from "../src/pages/blogInfo/BlogInfo";
import AdminLogin from "../src/pages/admin/login/AdminLogin";
import Dashboard from "../src/pages/admin/dashBoard/DashBoard"
import CreateBlog from "../src/pages/admin/createBlog/CreateBlog";
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createblog" element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />

        </Routes>
        <Toaster />
      </Router>
    </MyState >
  )
}

export default App


export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "manchuadu18@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'} />
  }
}