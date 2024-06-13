export default function renderProject(project) {
  return `
    <div class="project">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="?project=${project.id}">Learn More</a>
    </div>`;
}