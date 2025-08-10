import "./timeline.styles.css";
import MainHeader from "../../ui/main-header/main-header";
import LareiraConf from "../../ui/lareiraconf/lareiraconf";
import CardsGrid from "../../ui/cards-grid";
import TerminalHeader from "../../ui/terminal-header/terminal-header";
import FriendCommunities from "../../ui/friend-communities/friend-communities";
import TimelineGrid from "../../ui/timeline-grid";

const Timeline = () => {
  return (
    <div className="timeline">
      <TerminalHeader />
      <TimelineGrid />
    </div>
  );
};

export default Timeline;
