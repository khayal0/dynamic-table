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
      <div className="table--grid--head">
        <div className="table--grid--head__title">
          <span>Customer Reports</span>
        </div>
        <div className="table--grid--head__filter">
          <ModalFilter />
        </div>
      </div>
      <div className="table--grid--body">
        <div className="table--grid">
          {headers.map(item => (
            <span>{item}</span>
          ))}
          {data.map(items =>
            items.map((item, i) => (
              <React.Fragment>
                <span className={"span__" + (i + 1)}>{item}</span>
              </React.Fragment>
            ))
          )}
          {/* <div className="pagination">
          <button className="pageChangePagination">&lt;</button>
          <button className="pageCountPagination">1</button>
          <button className="pageCountPagination">2</button>
          <button className="pageCountPagination">3</button>
          <button className="pageChangePagination">&gt;</button>
        </div> */}
        </div>
      </div>
    </div>
  );
}
/* <span
className={`.button--status__${item.status.toUpperCase()}`}
></span> */
