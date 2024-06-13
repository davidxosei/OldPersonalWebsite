import renderProject from "./Project.js";
export default function renderProjects(projects) {
  return `
    <section class="projects" id="projects">


      <div class="search">
      
        <input type="search" name="projects" placeholder="Search Projects...">
      </div>
      <div class="projectslist">
        ${projects.map(project => renderProject(project)).join("")}
      </div>

    </section>`;
}