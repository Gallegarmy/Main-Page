import Link from 'next/link';

import { CommunityResources } from './CommunityResources/CommunityResources';

export default function Home() {
  return (
    <div className="border-2 min-h-screen">
      hi
      <Link href="/timeline">Timeline</Link>
      <CommunityResources />
    </div>
  );
}
