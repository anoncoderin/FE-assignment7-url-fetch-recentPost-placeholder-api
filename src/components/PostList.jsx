import { useEffect, useState } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("errorerror", error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Recent Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((e) => <Post key={e.id} post={e} />)
      )}
    </div>
  );
};

export default PostList;
