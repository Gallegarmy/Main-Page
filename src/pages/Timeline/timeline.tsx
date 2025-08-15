import "./timeline.styles.css";
import TerminalHeader from "../../ui/terminal-header/terminal-header";
import TimelineGrid from "../../ui/timeline-grid";
import { Header } from "../../ui/header/Header";

const Timeline = () => {
  return (
    <div className="timeline">
      <TerminalHeader />
      <Header />
      <TimelineGrid />
    </div>
  );
};

export default Timeline;
