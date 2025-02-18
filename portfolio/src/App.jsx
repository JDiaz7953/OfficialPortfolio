import "./App.css";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import TechStackSection from "../components/TechStackSection";
import Timeline from "../components/infoSection";
import RelevantCourseWorkSection from "../components/RelevantCourseWorkSection";
import Footer from "../components/footer";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <article className="mt-8 flex flex-col gap-16 pb-16">
          <IntroSection />
          <TechStackSection />
          <Timeline />
          <RelevantCourseWorkSection />
          <Footer />

          {/* Project page  */}
          {/* Contacts page */}
        </article>
      </main>
    </>
  );
}

export default App;
