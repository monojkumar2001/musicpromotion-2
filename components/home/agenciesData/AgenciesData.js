import React from "react";

const AgenciesData = () => {
  return (
    <>
      {tableData.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item.data}</td>
            <td>
              <div className="table-redio-box"></div>
            </td>
            <td>
              <div className="table-redio-box"></div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AgenciesData;

const tableData = [
  {
    id: 1,
    data: "100% Organic Promotion",
  },
  {
    id: 2,
    data: "100% Organic Promotion",
  },
  {
    id: 3,
    data: "100% Organic Promotion",
  },
  {
    id: 4,
    data: "100% Organic Promotion",
  },
  {
    id: 5,
    data: "100% Organic Promotion",
  },
];
