"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="DogMemecoin Logo"
        leftButtonText="Join Now"
        onLeftButtonClick={() => console.log('Button clicked')}
        className="navbar"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to DogMemecoin"
          subtitle="A fun and community-driven token"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => console.log('Primary button clicked')}
          onSecondaryButtonClick={() => console.log('Secondary button clicked')}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About DogMemecoin"
          descriptions={["DogMemecoin is a vibrant community-driven token that is full of energy and excitement.", "Join us for a fun experience in meme culture!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Set up your wallet', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Purchase DogMemecoin', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Join our community', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Our tokenomics revolves around community and sustainability."
          tokenData={[
            { value: '1M', description: 'Total Supply' },
            { value: '10%', description: 'Liquidity' },
            { value: '40%', description: 'Community Rewards' }
          ]}
        />
      </div>

      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline
          items={[
            { year: '2023', title: 'Launch', description: 'Initial launch with community engagement.' },
            { year: '2024', title: 'Expand', description: 'Expansion of our ecosystem.' },
            { year: '2025', title: 'Meme Fest', description: 'Community event to celebrate our journey.' }
          ]}
          className="roadmap"
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="DogMemecoin Logo"
          logoText="DogMemecoin"
          className="footer"
          columns={[
            { title: 'Links', items: [
              { label: 'Privacy Policy', onClick: () => console.log('Privacy Policy clicked') },
              { label: 'Terms of Use', onClick: () => console.log('Terms of Use clicked') },
              { label: 'Contact Us', onClick: () => console.log('Contact Us clicked') }
            ]}
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
