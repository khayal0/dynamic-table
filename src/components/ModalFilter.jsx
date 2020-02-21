import React, { useState } from "react";
import "../components/ModalFilter.scss";
import { filterSvg } from "../assets/filterSvg";
import { tableData } from "../utils/fakeData";

export default function Modal() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <React.Fragment>
      <span className="filter--icon" onClick={handleClick}>
        {filterSvg}
      </span>
      {show ? (
        <div className="modal--filter">
          {tableData.headers.map((item, i) => (
            <li>
              <label for={i}>
                <label class="checkbox--styled">
                  <input id={i} type="checkbox" />
                  <span></span>
                </label>
                {item}
              </label>
              <span></span>
            </li>
          ))}
        </div>
      ) : null}
    </React.Fragment>
  );
}
