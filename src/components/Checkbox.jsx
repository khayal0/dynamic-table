import React from "react";
import "../components/Checkbox.scss";

export default function Checkbox({ id, labelName }) {
  return (
    <React.Fragment>
      <label for={id}>
        <label class="checkbox--styled">
          <input id={id} type="checkbox" />
          <span></span>
        </label>
        {labelName}
      </label>
    </React.Fragment>
  );
}
