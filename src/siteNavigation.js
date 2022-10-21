// wonder if this could work by coding in react? yes it can, of course, be written in react, anything can, but not now.
//

//this breaks outside of /public and into /r_calc_app/public
class siteNavigation extends HTMLElement {
  connectedCallback() {
    const classToSet = this.attributes.dataClass.value;
    this.innerHTML = `
      <nav class="navigation">
        <ul>
          <li class="nav-item"><a href="main.html"  class="${classToSet == "main" ? "youAreHere" : ""} " >
            main
          </a></li>
          <li class="nav-item"><a href="cssFun.html"  class="${classToSet == "cssFun" ? "youAreHere" : ""} " >
            css
          </a></li>
          <li class="nav-item"><a href="API_NASA.html"  class="${classToSet == "API_NASA" ? "youAreHere" : ""} " >
            Web Application using NASA API
          </a></li>
          <li class="nav-item"><a href="../react-task-manager/public/index.html"  class="${classToSet == "calculator" ? "youAreHere" : ""} " >
            Calculator React/plain js
          </a></li>
          <li class="nav-item"><a href="#"  class="${classToSet == "#" ? "youAreHere" : ""} " >
            project3
          </a></li>
          <li class="nav-item"><a href="#"  class="${classToSet == "#" ? "youAreHere" : ""} " >
            project4
          </a></li>
          <li class="nav-item"><a href="tictaktoe.html"  class="${classToSet == "tictaktoe" ? 'class="youAreHere"' : ""} " >
            Early TicTacToe game
          </a></li>
        </ul>
        <div class="menu">
          <span class="bar-1"></span>
          <span class="bar-2"></span>
          <span class="bar-3"></span>
        </div>
      </nav>
    `
    // I'm going to need 3 spans aparently
  }
}

//tagName-> the name of the custom template in html, 
//constructor->name of class, 
//options->little is known about options
customElements.define('site-navigation', siteNavigation)

