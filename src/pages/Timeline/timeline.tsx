import "./timeline.styles.css";
import TerminalHeader from "../../ui/terminal-header/terminal-header";
import TimelineGrid from "../../ui/timeline-grid";
import { Footer, Header } from "../../ui";

const Timeline = () => {
  return (
    <div className="timeline">
      <TerminalHeader />
      <Header />
      <TimelineGrid />
      <Footer />
    </div>
  );
};

export default Timeline;
