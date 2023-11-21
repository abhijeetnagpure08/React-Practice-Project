import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
const getPageNumber = (page) => {
  page = Number(page);

  if (typeof page !== "number" || page <= 0) {
    page = 1;
  }

  if (!page) {
    page = 1;
  }
  return page;
};

function Users() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState({});
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(getPageNumber(searchParams.get("page")));

  const navigate = useNavigate();

  function handlePage(val) {
    let temp = page + val;
    setPage(temp);
  }

  const fetchUpdateData = (page) => {
    setLoading(true);
    getData(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchUpdateData(page);
  }, [page]);

  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);

  console.log(searchParams.get("page"));

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something went wrong... Please refresh</h1>
  ) : (
    <>
      <h1>Users Page</h1>
      {users?.data?.map((el) => (
        <div
          key={el.id}
          style={{ border: "1px solid black", padding: "20px", margin: "10px" }}
        >
          <img src={el.avatar} />
          <p>
            {el.first_name} {el.last_name}
          </p>
          <Link to={`/users/${el.id}`}>More Info</Link>
        </div>
      ))}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the Home Page useNavigate hook
      </button>
      <Link to="/">
        <button>Go to the Home Page using Link</button>
      </Link>
      <br />
      <br />
      <button
        disabled={page == 1}
        onClick={() => {
          handlePage(-1);
        }}
      >
        Previous
      </button>
      <button>{page}</button>
      <button
        onClick={() => {
          handlePage(1);
        }}
      >
        Next
      </button>
    </>
  );
}

export default Users;
