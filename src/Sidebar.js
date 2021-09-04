import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="sidebar">
      <SidebarRow
        selected={!selected}
        setSelected={setSelected}
        Icon={HomeIcon}
        title="Home"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={WhatshotIcon}
        title="Trending"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={SubscriptionsIcon}
        title="Subscriptions"
      />
      <hr />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={VideoLibraryIcon}
        title="Library"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={HistoryIcon}
        title="History"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={OndemandVideoIcon}
        title="Your videos"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={WatchLaterIcon}
        title="Watch Later"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={ThumbUpAltOutlinedIcon}
        title="Liked videos"
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        Icon={ExpandMoreOutlinedIcon}
        title="Show more"
      />
    </div>
  );
}

export default Sidebar;
