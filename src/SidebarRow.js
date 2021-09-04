import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title, Icon, selected, setSelected }) {
  const change = () => {
    setSelected(!selected);
  };
  return (
    <div
      onClick={change}
      className={`sidebarRow ${selected ? "selected" : ""}`}
    >
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
