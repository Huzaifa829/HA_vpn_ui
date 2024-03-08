import React from "react";
import "./app.css";
import { Button, Card } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import Cardbug from "../Card/Cardbug";
import FeatureImage from "../../assests/images/Features.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const ChangeLogPage = () => {
  return (
    <>
      <div className="main_one">
        <div className="decendent">
          My Order > <span className="head_order">New Order</span>
        </div>
        <Button
          className="HA_2_btn_landing1 decendent-1"
          startIcon={<FiberManualRecordIcon style={{ fontSize: "12px" }} />}
        >
          What's New?
        </Button>
        <div>
          <h1 className="head_logo">Changelog</h1>
          <div className="head-desc">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and <br />
            retain more users. Trusted by over 4,000 startups.
          </div>
        </div>
        <div className="time-line">
          <TimeLine />
        </div>
        <div className="last-card">
          <Cardbug />
        </div>
        <img src={FeatureImage} alt="images" className="img-last" />
      </div>
    </>
  );
};

export default ChangeLogPage;
