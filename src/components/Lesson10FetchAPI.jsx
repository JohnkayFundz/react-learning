import { useEffect, useState } from "react";

function Lesson10FetchAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div>
      <h1>Lesson 10: Fetch API</h1>

      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lesson10FetchAPI;