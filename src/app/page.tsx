import { CommunityResources } from './CommunityResources/CommunityResources';
import { FriendCommunities } from './FriendCommunities/FriendCommunities';
import { HeroSlider } from './HeroSlider/HeroSlider';
import { heroSliderData } from './data/heroSliderData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider slides={heroSliderData} logo="/assets/sysarmy-galicia-logo.png" />
      <CommunityResources />
      <FriendCommunities />
    </div>
  );
}
