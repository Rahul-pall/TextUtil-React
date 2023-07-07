import React, { useState } from "react";

export default function Darkmode() {
  const [mystyle, changemystyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [setbtn, changebtn] = useState(<i class="fa-solid fa-sun"></i>);
  const [darkstyle, changedarkstyle] = useState({
    color: "orange",
  });
  const toggle = () => {
    if (mystyle.color === "white") {
      changemystyle({
        color: "black",
        backgroundColor: "white",
      });
      changebtn(<i class="fa-solid fa-moon"></i>);
      changedarkstyle({
        color: "orange",
      });
    } else {
      changemystyle({
        color: "white",
        backgroundColor: "black",
      });
      changebtn(<i class="fa-solid fa-sun"></i>);
      changedarkstyle({
        color: "yellow",
      });
    }
  };
  return (
    <>
      <div className="main px-4" style={mystyle}>
        <div className="navbar">
          <h3>shopy</h3>

          <div style={darkstyle} onClick={toggle} className="mr-5" id="darkbtn">
            {setbtn}
          </div>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Section</li>
          </ul>
        </div>
      </div>
    </>
  );
}
