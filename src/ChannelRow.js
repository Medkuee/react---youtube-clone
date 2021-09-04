import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  const [buttonActive, setButtonActive] = useState(false);
  const subscribed = () => {
    setButtonActive(!buttonActive);
  };
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
      <button
        className={`channelRow__button ${buttonActive ? "" : "active"}`}
        onClick={subscribed}
      >
        {buttonActive ? "SUBSCRIBE" : "SUBSCRIBED"}
      </button>
    </div>
  );
}

export default ChannelRow;
