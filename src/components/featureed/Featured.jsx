import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revnue</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item__title">Target</div>
            <div className="item__result negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Week</div>
            <div className="item__result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Month</div>
            <div className="item__result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
