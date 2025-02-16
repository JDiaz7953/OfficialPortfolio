import "./App.css";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import TechStackSection from "../components/TechStackSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <article className="mt-8 flex flex-col gap-16 pb-16">
          <IntroSection />
          <TechStackSection />
        </article>
      </main>
    </>
  );
}

export default App;
