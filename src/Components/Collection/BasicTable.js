import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import GetCard from "../../actions/GetCard";
import GetLibrary from "../../actions/GetLibrary";
import MOCK_DATA2 from "../../mock/MOCK_DATA2.json";
import "./table.css";

import { useAsyncEffect } from 'use-async-ops'

export const BasicTable = () => {

  const { loading } = useAsyncEffect({ name: services.GET_LIBRARY })

  const d = GetCard("Mana Crypt");
  const data = GetLibrary();
  const columns = useMemo(() => COLUMNS, []);

  console.log(d)
  console.log(data)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // console.log(cell);
                  if (cell.column.id === "prices.usd") {
                    return <td {...cell.getCellProps()}>${cell.render("Cell")}</td>;
                  } else {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
