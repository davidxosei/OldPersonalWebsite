import renderNav from "./Navbar.js";

export default function renderResume(resumeUrl) {

  fetch(resumeUrl)
    .then(response => response.text())
    .then(resumeContent => {
      const main = document.querySelector("main");
      main.innerHTML = `
        ${renderNav()}
        <div class="content-wrapper">
          <div class="resume">
            <h2>Resume</h2>
            <div>${resumeContent}</div>
            <a href="#" onclick="renderMainPage(data)">Back to About</a>
          </div>
        </div>`;
    })
    .catch(error => console.error("Error fetching resume:", error));
}