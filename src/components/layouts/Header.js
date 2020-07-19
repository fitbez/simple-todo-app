import React from "react";

function Header() {
  const HeaderStyle = {
    backgroundColor: "#678c89",
    color: "#fff",
    padding: "10px 15px",
  };
  return (
    <header style={HeaderStyle}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          lineHeight: "1.4em",
          marign: "0px",
        }}
      >
        Simple Todo App
      </h1>
    </header>
  );
}

export default Header;
