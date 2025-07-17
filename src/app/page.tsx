// --- Next ---
import dynamic from 'next/dynamic';
// --- Components ---
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/landing-page/Hero';
// --- Dynamic Components ---
const Tools = dynamic(() => import('@/components/landing-page/Tools'));
const WhatsNew = dynamic(() => import('@/components/landing-page/WhatsNew'));
const Community = dynamic(() => import('@/components/landing-page/Community'));
const About = dynamic(() => import('@/components/landing-page/About'));

export default function LandingPage() {
  return (
    <PageLayout
      headerShowBadge={true}
      headerLogoUrl='/icons/otg-marker.svg'
      headerLogoWidth={50}
      headerLogoHeight={50}>
      <Hero />
      <Tools />
      <WhatsNew />
      <Community />
      <About />
    </PageLayout>
  );
}
