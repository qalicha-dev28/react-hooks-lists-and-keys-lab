import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About
        bio={user.bio}
        image={user.image}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
