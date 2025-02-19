import "./App.css";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import TechStackSection from "../components/TechStackSection";
import Timeline from "../components/infoSection";
import RelevantCourseWorkSection from "../components/RelevantCourseWorkSection";
import Footer from "../components/footer";
import ProjectSection from "../components/ProjectSection";
import ContactForm from "../components/ContactSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// TO DO ADD CONTACT PAGE

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <article className="mt-8 flex flex-col gap-16 pb-16">
            <Switch>
              <Route exact path="/">
                <IntroSection />
                <TechStackSection />
                <Timeline />
                <RelevantCourseWorkSection />
              </Route>
              <Route exact path="/projects">
                <ProjectSection />
              </Route>
              <Route exact path="/contacts">
              <ContactForm />
              </Route>
            </Switch>
            <Footer />
            {/* Contacts page */}
          </article>
        </main>
      </Router>
    </>
  );
}

export default App;
