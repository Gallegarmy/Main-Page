import { CommunityResources } from './CommunityResources/CommunityResources';
import { FriendCommunities } from './FriendCommunities/FriendCommunities';
import { HeroSlider } from './HeroSlider/HeroSlider';
import { LareiraSection } from './LareiraSection/LareiraSection';
import { lareiraSectionData } from './LareiraSection/data';
import { heroSliderData } from './data/heroSliderData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider slides={heroSliderData} logo="/assets/communities/sysarmy-galicia/sysarmy-galicia-logo.png" />
      <CommunityResources />
      <FriendCommunities />
      <LareiraSection data={lareiraSectionData} />
    </div>
  );
}
