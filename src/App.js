import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import ContactInfo from "./components/Contact-Info";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact-Form";

function App() {
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Header
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      />
      <main>
        {contactSelected ? (
          <ContactForm />
        ) : projectsSelected ? (
          <>
            <Projects />
            <Skills />
          </>
        ) : aboutSelected ? (
          <About />
        ) : (
          <>
            <About />
            <Work
              projectsSelected={projectsSelected}
              setProjectsSelected={setProjectsSelected}
            />
            <ContactInfo />
            <Skills />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
