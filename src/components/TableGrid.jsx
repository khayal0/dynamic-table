import React, { useState } from "react";
import "../components/TableGrid.scss";
import ModalFilter from "./ModalFilter";
import { tableData } from "../utils/fakeData";

// Grid Table features :
// show how much rows to display - pass quantity=true, default is true
// possible future features:
// search inside table
// go to page
// select quantity of rows
// sorting by column

const { headers, data } = tableData;

export default function FlexTable(props) {
  return (
    <div className="table--grid--container">
      <div className="table--grid">
        {headers.map((item, i) => (
          <span>{item}</span>
        ))}
        <span>
          <ModalFilter />
        </span>
        {data.map(items =>
          items.map((item, i) => {
            console.log(items.length, "and", i + 1);
            return i === 10 ? (
              <span
                className={`.button--status__${item.status.toUpperCase()}`}
              ></span>
            ) : i === 0 ? (
              <span>
                <a href="google.com" alt="">
                  {item}
                </a>
              </span>
            ) : (
              <span>{item}</span>
            );
          })
        )}
      </div>
      <div className="pagination">
        <button className="pageChangePagination">&lt;</button>
        <button className="pageCountPagination">1</button>
        <button className="pageCountPagination">2</button>
        <button className="pageCountPagination">3</button>
        <button className="pageChangePagination">&gt;</button>
      </div>
    </div>
  );
}
