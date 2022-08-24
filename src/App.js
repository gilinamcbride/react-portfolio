import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import ContactInfo from "./components/Contact-Info";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [projectsSelected, setProjectsSelected] = useState(false);

  return (
    <div>
      <Header
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
      />
      <main>
        {!projectsSelected ? (
          <>
            <About />
            <Work
              projectsSelected={projectsSelected}
              setProjectsSelected={setProjectsSelected}
            />
            <ContactInfo />
          </>
        ) : (
          <Projects />
        )}
      </main>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
