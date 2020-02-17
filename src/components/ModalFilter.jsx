import React, { useState } from "react";
import "../components/ModalFilter.scss";

export default function Modal() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <React.Fragment>
      <span className="filter--icon" onClick={handleClick}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          class=""
          data-icon="filter"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"></path>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            class=""
            data-icon="filter"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"></path>
          </svg>
        </svg>
      </span>
      {show ? (
        <div className="modal--filter">
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>

          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>
          <li>
            <input id="1" type="checkbox" />
            <span class="checkbox--custom"></span>
            <label for="1">example select</label>
          </li>

          <var>
            {" "}
            <li>
              <input id="1" type="checkbox" />
              <span class="checkbox--custom"></span>
              <label for="1">example select</label>
            </li>
          </var>
          <li></li>
        </div>
      ) : null}
    </React.Fragment>
  );
}
