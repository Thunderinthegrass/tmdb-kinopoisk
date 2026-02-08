import {Hero} from "@/pages/Main/Hero/Hero.tsx";
import {PopularSection} from "@/pages/Main/PopularSection/PopularSection.tsx";
import {TopRatedSection} from "@/pages/Main/TopRatedSection/TopRatedSection.tsx";
import {UpcomingSection} from "@/pages/Main/UpcomingSection/UpcomingSection.tsx";
import {NowPlayingSection} from "@/pages/Main/NowPlayingSection/NowPlayingSection.tsx";

export const Main = () => {
  return (
    <div>
      <Hero />
      <PopularSection />
      <TopRatedSection />
      <UpcomingSection />
      <NowPlayingSection />
    </div>
  );
};