import "./home.styles.css";
import MainHeader from "../../ui/main-header/main-header";
import CardsGrid from "../../ui/cards-grid";
import TerminalHeader from "../../ui/terminal-header/terminal-header";
import FriendCommunities from "../../ui/friend-communities/friend-communities";

const Home = () => {
  return (
    <div className="home">
      <TerminalHeader />
      <MainHeader />
      <CardsGrid />
      <FriendCommunities />
    </div>
  );
};

export default Home;
