import "./timeline.styles.css";
import TerminalHeader from "../../ui/terminal-header/terminal-header";
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
