import { Header } from '@/components/layout/Header';
import type { Metadata } from 'next';

import { CommunityResources } from '../components/sections/CommunityResources/CommunityResources';
import { FriendCommunities } from '../components/sections/FriendCommunities/FriendCommunities';
import { HeroSlider } from '../components/sections/HeroSlider/HeroSlider';
import { LareiraSection } from '../components/sections/LareiraSection/LareiraSection';
import { heroSliderData } from '../data/HeroSliderData';
import { lareiraSectionData } from '../data/LareiraSectionData';

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
