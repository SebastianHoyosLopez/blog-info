// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Page from "./pages/Page";
import Blogs from "./pages/Page-blogs/Blogs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Page pageCode="home" />} />
        <Route path="/page" element={<Page />} />
        <Route path="/blogs" element={<Blogs pageCode="blogs" />} />
      </Routes>
    </Layout>
  );
}

export default App;
