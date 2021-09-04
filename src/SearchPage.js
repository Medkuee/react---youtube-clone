import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import image from "./image.jpg";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        channel="Ken"
        verified
        subs="200M"
        noOfVideos={382}
        description="Hell my preeends love ya wahhha"
        image={image}
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
      <VideoRow
        views="1.4M"
        subs="200M"
        description="Do you wanna build a snowman"
        timestamp="59 seconds ago"
        channel="Ken"
        title="Ez pz lemons squeezy"
        image="https://source.unsplash.com/random/300x200"
      />
    </div>
  );
}

export default SearchPage;
