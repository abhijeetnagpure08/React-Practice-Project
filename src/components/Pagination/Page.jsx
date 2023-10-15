import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  const [len, setLen] = useState(0);

  function handlePage(val) {
    const temp = page + val;
    setPage(temp);
  }

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setLen(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    try {
      setLoad(true);
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      // console.log(data);

      setPosts(data);
      setLoad(false);
    } catch (error) {
      console.log(err);
      setErr(true);
      setLoad(false);
    }
  };
  // if(load) return <h1>Loading.....</h1>
  if (err) return <h1>Something went wrong</h1>;
  return (
    <div>
      <h1>Posts</h1>
      {/* <button onClick={fetchData}>Click the button to get posts</button> */}
      <hr />
      <br />
      <div>
        {load ? (
          <h1>Loading.....</h1>
        ) : (
          // posts?.map((el) => <li key={el.id}>{el.title}</li>)
          posts?.map((el) => {
            return (
              <div className="box" key={el.id}>
                <h4>
                  {el.id} - {el.title}
                </h4>
                <p>{el.title}</p>
              </div>
            );
          })
        )}
      </div>
      {/* {console.log(posts.length)} */}
      <div style={{marginBottom : 20}}>
        <button disabled={page === 1} onClick={() => handlePage(-1)}>
          PREVIOUS
        </button>
        <button disabled>{page}</button>
        <button
          disabled={page === Math.ceil(len / 10)}
          onClick={() => handlePage(1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
export default Posts;
