import {
  Footer7,
  GiveLivelyWidget,
  NewHeroHeader,
  AboutSection,
  ImpactSection,
  SuccessStories,
  FinalCTA,
  NewNavbar,
} from "@/components";

export default function Home() {
  return (
    <>
      <title>
        Free Pupil | Transforming Lives Through Education & Opportunity
      </title>

      <NewNavbar />

      <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
        {/* Hero - Introduce the mission with dramatic visuals */}
        <NewHeroHeader />

        {/* About - Tell the story of who we are and why we exist */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Impact - Show the difference we make with data */}
        <section id="impact">
          <ImpactSection />
        </section>

        {/* Success Stories - Share real transformations */}
        <section id="stories">
          <SuccessStories />
        </section>

        {/* Final CTA - Inspire action with emotion */}
        <FinalCTA />

        {/* Donation Widget */}
        <GiveLivelyWidget />

        <Footer7 />
      </main>
    </>
  );
}
