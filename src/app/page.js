import LandingPage from "@/components/landing-page";
import NavBar from "@/components/nav-header";
import AboutMe from "@/components/about-me";
export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <AboutMe />
    </div>
  );
}
