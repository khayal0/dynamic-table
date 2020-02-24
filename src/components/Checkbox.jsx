import React, { useEffect } from "react";
import "../components/Checkbox.scss";

export default function Checkbox({ id, labelName, checked }) {
  useEffect(() => {
    console.log(checked);
    return () => {};
  }, [checked]);
  return (
    <React.Fragment>
      <label htmlFor={id}>
        <label className="checkbox--styled">
          <input id={id} type="checkbox" checked={checked} />
          <span></span>
        </label>
        {labelName}
      </label>
    </React.Fragment>
  );
}
