import React from "react";
import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

function Table({ items, columns, sortKey, sortOrder, handleSort }) {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortKey={sortKey}
        sortOrder={sortOrder}
        handleSort={handleSort}
      />
      <TableBody items={items} columns={columns} />
    </table>
  );
}

export default Table;
