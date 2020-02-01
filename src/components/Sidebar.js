import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../components/Sidebar.css";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="sidebar">
      <div className="logoControlPanel">
        <img src={logo} alt="logo" width="62" />
        <div className="logoText">
          <span>Client Bank </span>
          <span>Control Panel</span>
        </div>
      </div>
      <nav>
        <ul>
          <p className="headerSidebar"> Administrator's panel</p>
          <li>Companies</li>
          <li>Asan users</li>
          <li>Comissions</li>
          <li>Organizations </li>
          {/* <p className="headerSidebar">Operator's panel </p> */}
          <li>Operations</li>
          <li>Null (self)</li>
          <li>(future page)</li>
        </ul>
      </nav>
    </div>
  );
}

{
  /* <ul>
  <li>Administrator's panel</li>
  <li>Companies</li>
  <li>Asan advanced users</li>
  <li>Common comissions</li>
  <li>Organizations codes</li>
  <li>Operator's panel</li>
  <li>Operations</li>
  <li>Operatons (self)</li>
  <li>Null (future page)</li>
</ul>

<p>Administrator's panel</p>
<p>Companies</p>
<p>Asan advanced users</p>
<p>Common comissions</p>
<p>Organizations codes</p>
<p>Operator's panel</p>
<p>Operations</p>
<p>Operatons (self)</p>
<p>Null (future page)</p> */
}
