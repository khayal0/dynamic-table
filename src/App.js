import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Table />
      </div>
    </div>
  );
}

export default App;
