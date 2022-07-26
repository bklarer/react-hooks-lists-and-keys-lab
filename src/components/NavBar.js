import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav> 
      {links.map(link => {
        const fullLink = "#" + link;
        return <a key={link} href= {fullLink}>{link}</a>})}
    </nav>
  );
}
          


  
export default NavBar;
