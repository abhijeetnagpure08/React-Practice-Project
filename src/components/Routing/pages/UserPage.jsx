import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const res = {
//   "data": {
//   "id": 6,
//   "email": "tracey.ramos@reqres.in",
//   "first_name": "Tracey",
//   "last_name": "Ramos",
//   "avatar": "https://reqres.in/img/faces/6-image.jpg"
//   },
//   "support": {
//   "url": "https://reqres.in/#support-heading",
//   "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//   }
//   }
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function UserPage() {
  const val = useParams();
  console.log(val);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const fetchUpdateData = () => {
    setLoading(true);
    getData(`https://reqres.in/api/users/${val.user_id}`)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchUpdateData();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something went wrong... Please refresh</h1>
  ) : (
    <div style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
      {/* <h1>UserPage </h1> */}
      <img src={user?.data?.avatar} alt={user?.data?.first_name} />
      <p>
        {user?.data?.first_name} {user?.data?.last_name}
      </p>
      <p>{user?.data?.email}</p>
      <p>ID : {user?.data?.id}</p>
    </div>
  );
}

export default UserPage;
