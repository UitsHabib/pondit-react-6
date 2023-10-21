import React from "react";

function TableBody({ items, columns }) {
  return (
    <tbody>
      {items.map(function (item, index) {
        return (
          <tr key={index}>
            {columns.map((col, idx) => {
              if (col.key) return <td key={idx}>{item[col.key]}</td>;
              else return col.render(item);
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
