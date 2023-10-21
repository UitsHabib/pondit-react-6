import React from "react";
import { SortAlphaDown, SortAlphaUp } from "react-bootstrap-icons";

function TableHeader({ columns, sortKey, sortOrder, handleSort }) {
  function getIcon(label) {
    if (label === sortKey) {
      if (sortOrder === "asc") {
        return <SortAlphaDown />;
      } else {
        return <SortAlphaUp />;
      }
    }
  }

  const handleClick = (col) => {
    if (!col.isSortable) {
      return;
    }

    handleSort(col.key);
  };

  return (
    <thead>
      <tr>
        {columns.map((col, idx) => (
          <th
            style={{ cursor: "pointer" }}
            key={idx}
            scope="col"
            onClick={() => handleClick(col)}
          >
            {col.label} {getIcon(col.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
