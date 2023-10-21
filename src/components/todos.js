import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../common/table.component";

function Todos() {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    function success(response) {
      const todos = response.data.todos;
      setTodos(todos);
    }

    function error(err) {
      console.log(err);
    }

    axios.get("https://dummyjson.com/todos").then(success).catch(error);
  }

  useEffect(getTodos, []);

  const columns = [
    {
      label: "ID",
      key: "id",
    },
    {
      label: "Todo",
      key: "todo",
    },
    {
      label: "IsCompleted",
      // key: "completed",
      render: (item) => {
        return (
          <td key={item.label}>{`${
            item.completed ? "Completed" : "Pending"
          }`}</td>
        );
      },
    },
  ];

  return (
    <div className="container mt-5">
      <Table columns={columns} items={todos} />
    </div>
  );
}

export default Todos;
