import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinearProgress } from "@mui/material";
import Icon from "../assets/article.png";
const BlogPage = () => {
  const [blogPosts, setBlogPost] = useState([]);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    setIsData(true);
    fetch("https://heaven.onrender.com/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogPost(data);
        setIsData(false);
      });
  }, []);
  console.log(blogPosts);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <div className="max-w-7xl min-h-screen ">
        <h2 className="text-4xl my-10 text-center planetText text-red-600">
          Blog
        </h2>
        <div className="flex flex-col gap-4 p-6">
          {blogPosts.map((blog, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="w-full text-white rounded-xl bg-gradient-to-t from-red-400 p-10 to-red-400"
            >
              <h1 className="text-2xl my-2">{blog.questions}</h1>
              <p>{blog.answers}</p>
            </div>
          ))}
        </div>
        {blogPosts.length === 0 && (
          <div className="w-full flex-col flex justify-center items-center mx-auto py-16 ">
            <img src={Icon} alt="" className="w-20" />
            <h1 className="font-semibold text-gray-400">
              {isData ? "Loading..." : "You dont have any toys anymore."}
              {isData && <LinearProgress color="error" />}
            </h1>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
