import renderNav from "./Navbar.js"
export default function renderProjectDetail(project) {
  fetch(project.link)
    .then(response => response.text())
    .then(projectDetails => {
      const main = document.querySelector("main");
      main.innerHTML = `
        ${renderNav()}
        <div class="content-wrapper">
          <div class="project-detail">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <!-- Add more project details here -->
            <div>${projectDetails}</div>
            <a href="?project=${project.id}">Back to Projects</a>
          </div>
        </div>`;
    })
    .catch(error => console.error("Error fetching project details:", error));
}