import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/layout";
import BlogDetailCard from "../../components/blogDetailComponent/detailCard/index";
import { getSingleBlog } from "../../reducers/blogReducer";
import { increaseViewCountSuccess } from "../../reducers/viewsReducer";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();

  const { views } = useSelector((state) => state.views);

  useEffect(() => {
    getSingleBlog(id).then((blogData) => {
      setBlog(blogData);
      setLoading(false);
    });

    dispatch(increaseViewCountSuccess({ id }));
  }, [dispatch, id]);

  return (
    <>
      {!loading ? (
        <>
          <Layout>
            <BlogDetailCard
              {...blog}
              views={views.find((item) => item.id === id)?.value || 0}
            />
          </Layout>
        </>
      ) : (
        <h2>Loading ...</h2>
      )}
    </>
  );
};

export default BlogDetail;
