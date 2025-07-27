import React from "react";

function NavBar() {
  // Added "projects" to the links array
  const links = ["home", "about", "projects"]; // <-- ADD "projects" here!

  return (
    <nav>
      {/* Map over the links array to create <a> tags */}
      {links.map((link) => (
        <a key={link} href={`#${link}`}> {/* Use link as key, and template literal for href */}
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
