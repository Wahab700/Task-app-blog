import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBlogs } from "../../reducers/blogReducer";
import Layout from "../../components/layout/index";
import Hero from "../../components/blogHomeComponent/hero/index";
import BlogCards from "../../components/blogHomeComponent/BlogCard/BlogCards";

const Blog = () => {
  const { blogs, blogsLoading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allBlogs());
  }, [dispatch]);

  return (
    <Layout>
      <Hero />
      {!blogsLoading ? (
        <>
          {blogs.length > 0 ? (
            <>
              <BlogCards blogs={blogs} />
            </>
          ) : (
            <h2>No Blogs Found !</h2>
          )}
        </>
      ) : (
        <h2> Loading ...</h2>
      )}
    </Layout>
  );
};

export default Blog;
