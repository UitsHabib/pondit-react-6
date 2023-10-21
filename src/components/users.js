import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../common/table.component";
import _ from "lodash";

function Users() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    function success(response) {
      const users = response.data.users;
      setUsers(users);
    }

    function error(err) {
      console.log(err);
    }

    axios.get("https://dummyjson.com/users").then(success).catch(error);
  }

  useEffect(getUsers, []);

  const columns = [
    {
      label: "ID",
      key: "id",
      isSortable: true,
    },
    {
      label: "First Name",
      key: "firstName",
      isSortable: true,
    },
    {
      label: "Last Name",
      key: "lastName",
      isSortable: true,
    },
    {
      label: "Email",
      key: "email",
      isSortable: true,
    },
    {
      label: "Username",
      key: "username",
      isSortable: true,
    },
    {
      label: "Action",
      render: () => {
        return (
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        );
      },
    },
  ];

  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (newSortKey) => {
    if (sortKey === newSortKey) {
      if (sortOrder === "asc") {
        setSortOrder("desc");
      } else {
        setSortOrder("asc");
      }
    } else {
      setSortKey(newSortKey);
      setSortOrder("asc");
    }
  };

  const sortedUsers = _.orderBy(users, sortKey, sortOrder);

  return (
    <div className="container mt-5">
      <Table
        columns={columns}
        items={sortedUsers}
        sortKey={sortKey}
        sortOrder={sortOrder}
        handleSort={handleSort}
      />
    </div>
  );
}

export default Users;
