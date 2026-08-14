import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import LeadershipSection from "../components/sections/LeadershipSection";
import {
  capabilitiesSection,
  contactSection,
  experienceSection,
  footerSection,
  heroSection,
  headerLogo,
  leadershipSection,
  navItems,
} from "./data";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <SiteHeader navItems={navItems} logo={headerLogo} />

      <main>
        <HeroSection {...heroSection} />

        <div className="section-group">
          <CapabilitiesSection {...capabilitiesSection} />
          <ExperienceSection {...experienceSection} />
          <LeadershipSection {...leadershipSection} />
          <ContactSection {...contactSection} />
        </div>
      </main>

      <SiteFooter year={year} {...footerSection} />
    </div>
  );
}
