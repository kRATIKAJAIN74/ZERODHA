import React, { useState, useContext } from "react";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  ClassSharp,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} </span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);
  const handleMouseEnter = (e) => {
    setshowWatchListActions(true);
  };
  const handleMouseLeave = (e) => {
    setshowWatchListActions(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}> {stock.name} </p>
        <div className="itemInfo">
          <span className="percent"> {stock.percent} </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price"> {stock.price} </span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="More (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined />
          </button>
        </Tooltip>
        <Tooltip
          title="More (M)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
