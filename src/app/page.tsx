import type { Metadata } from 'next';

import { CommunityResources } from './CommunityResources/CommunityResources';
import { FriendCommunities } from './FriendCommunities/FriendCommunities';
import { Header } from './Header/Header';
import { HeroSlider } from './HeroSlider/HeroSlider';
import { heroSliderData } from './HeroSlider/data';
import { LareiraSection } from './LareiraSection/LareiraSection';
import { lareiraSectionData } from './LareiraSection/data';

export const metadata: Metadata = {
  title: 'Home - Sysarmy Galicia',
  description:
    'Welcome to Sysarmy Galicia, the most active technology and systems community in Galicia. Join events, resources and networking with industry professionals.',
  openGraph: {
    title: 'Home - Sysarmy Galicia',
    description:
      'Welcome to Sysarmy Galicia, the most active technology and systems community in Galicia. Join events, resources and networking with industry professionals.',
  },
  twitter: {
    title: 'Home - Sysarmy Galicia',
    description:
      'Welcome to Sysarmy Galicia, the most active technology and systems community in Galicia. Join events, resources and networking with industry professionals.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider slides={heroSliderData} logo="/assets/communities/sysarmy-galicia/sysarmy-galicia-logo.png" />
      <CommunityResources />
      <FriendCommunities />
      <LareiraSection data={lareiraSectionData} />
    </div>
  );
}
