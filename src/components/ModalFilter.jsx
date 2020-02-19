import React, { useState } from "react";
import "../components/ModalFilter.scss";
import { filterSvg } from "../assets/filterSvg";

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
          <li>
            <input id="1" type="checkbox" />
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <label for="1">example select</label>
          </li>
        </div>
      ) : null}
    </React.Fragment>
  );
}
