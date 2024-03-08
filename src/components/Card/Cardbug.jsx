import React from "react";
import "./card.css";
import { Button } from "@mui/material";
const Cardbug = () => {
  return (
    <div className="Part-2">
      <div className="root-child">
        <div className="head_flex">
          <div className="Card-heading">Want to report a bug?</div>
          <Button className="HA_btn_11">Leave us a message</Button>
        </div>
        <br />
        <div style={{ fontSize: "18px", color: "#475467" }}>
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </div>
        <br />
      </div>
    </div>
  );
};

export default Cardbug;
