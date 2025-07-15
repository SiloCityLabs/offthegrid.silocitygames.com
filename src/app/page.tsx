import Hero from '@/components/landing-page/Hero';
import Tools from '@/components/landing-page/Tools';
import WhatsNew from '@/components/landing-page/WhatsNew';
import Community from '@/components/landing-page/Community';
import About from '@/components/landing-page/About';
import PageLayout from '@/components/PageLayout';

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
