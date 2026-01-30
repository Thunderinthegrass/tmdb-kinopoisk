import {Hero} from "@/app/ui/Main/Hero/Hero.tsx";
import {PopularSection} from "@/app/ui/Main/PopularSection/PopularSection.tsx";
import {TopRatedSection} from "@/app/ui/Main/TopRatedSection/TopRatedSection.tsx";
import {UpcomingSection} from "@/app/ui/Main/UpcomingSection/UpcomingSection.tsx";
import {NowPlayingSection} from "@/app/ui/Main/NowPlayingSection/NowPlayingSection.tsx";

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