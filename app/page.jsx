import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import LeadershipSection from "../components/sections/LeadershipSection";
import ProcessSection from "../components/sections/ProcessSection";
import SuccessStoriesSection from "../components/sections/SuccessStoriesSection";
import {
  capabilitiesSection,
  contactSection,
  experienceSection,
  footerSection,
  heroSection,
  leadershipSection,
  navItems,
  processSection,
  successStoriesSection,
} from "./data";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <SiteHeader navItems={navItems} />

      <main>
        <HeroSection {...heroSection} />

        <div className="section-group">
          <CapabilitiesSection {...capabilitiesSection} />
          <ExperienceSection {...experienceSection} />
          <ProcessSection {...processSection} />
          <SuccessStoriesSection {...successStoriesSection} />
          <LeadershipSection {...leadershipSection} />
          <ContactSection {...contactSection} />
        </div>
      </main>

      <SiteFooter year={year} {...footerSection} />
    </div>
  );
}
