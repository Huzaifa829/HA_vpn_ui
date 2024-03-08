import React from "react";
import "./card.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Button } from "@mui/material";
const card2 = () => {
  return (
    <div className="Part-2">
      <div className="root-child">
        <div className="head_flex">
          <div className="Card-heading">AtomicVPN application version 1.0</div>
          <span className="jan-2024">12 Jan, 2024</span>
        </div>
        <br />
        <div className="card-desc">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and <br />
          retain more users. Trusted by over 4,000 startups.
        </div>
        <br />
        <Button
          style={{ color: "#00A573", fontSize: "1.4rem", fontWeight: "600" }}
          endIcon={<TrendingFlatIcon />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default card2;
