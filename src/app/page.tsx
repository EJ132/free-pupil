import {
  Footer7,
  GiveLivelyWidget,
  HomePageCTA25,
  HomePageHeader5,
  HomePageLayout22,
  HomePageLayout242,
  HomePageLayout6,
  Navbar6,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <title>
        Free Pupil | A non-profit organization that helps underprivileged
        children
      </title>

      <Navbar6 />

      <HomePageHeader5 />
      <HomePageLayout6 />
      <HomePageLayout242 />

      <HomePageLayout22 />
      <HomePageCTA25 />

      <GiveLivelyWidget />

      <Footer7 />
    </main>
  );
}
