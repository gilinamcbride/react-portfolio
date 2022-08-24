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

  return (
    <div>
      <Header
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {contactSelected ? (
          <ContactForm />
        ) : projectsSelected ? (
          <Projects />
        ) : (
          <>
            <About />
            <Work
              projectsSelected={projectsSelected}
              setProjectsSelected={setProjectsSelected}
            />
            <ContactInfo />
          </>
        )}
      </main>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
