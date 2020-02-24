import React, { useState } from "react";
import "../components/ModalFilter.scss";
import { filterSvg } from "../assets/filterSvg";
import Checkbox from "../components/Checkbox";

export default function ModalFilter({ headers }) {
  const initialState = headers.map(item => ({ item, checked: true }));
  const [show, setShow] = useState(false);
  const [headerStates, setHeaderStates] = useState(initialState);

  function handleClick() {
    setShow(!show);
  }

  function handleChange() {}

  return (
    <React.Fragment>
      <span className="filter--icon" onClick={handleClick}>
        {filterSvg}
      </span>
      {show ? (
        <div className="modal--filter">
          {headers.map((item, i) => (
            <li key={i}>
              <Checkbox
                id={i}
                labelName={item.header}
                onChange={handleChange}
                checked={item.show}
              />
            </li>
          ))}
        </div>
      ) : null}
    </React.Fragment>
  );
}
